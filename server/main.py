import os
import sys
from pathlib import Path
import sqlite3
from datetime import datetime
from typing import List, Optional
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr, Field

# Ensure server directory is in sys.path for robust imports regardless of working dir
SERVER_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SERVER_DIR.parent
if str(SERVER_DIR) not in sys.path:
    sys.path.insert(0, str(SERVER_DIR))

import config

# Initialize FastAPI application
app = FastAPI(
    title="Acharya Portfolio Cloud API",
    description="Full-stack FastAPI backend for portfolio dynamic content & contact management.",
    version="1.0.0"
)


# Configure CORS Middleware
# Allows S3 static hosting, EC2 frontend, and local dev to interact seamlessly
allowed_origins = [config.FRONTEND_URL] if config.FRONTEND_URL != "*" else ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False if config.FRONTEND_URL == "*" else True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Setup (SQLite for zero-dependency persistent storage on EC2)
DB_PATH = os.path.join(os.path.dirname(__file__), "messages.db")

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    # Contact messages table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TEXT NOT NULL,
            ip_address TEXT
        )
    """)
    # Visitor analytics table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS visits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            page TEXT NOT NULL,
            visited_at TEXT NOT NULL,
            user_agent TEXT,
            ip_address TEXT
        )
    """)
    conn.commit()
    conn.close()

# Initialize DB on startup
init_db()

# --- Pydantic Request Models ---
class ContactFormRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: str = Field(..., min_length=5, max_length=100)
    message: str = Field(..., min_length=5, max_length=1000)

class VisitRequest(BaseModel):
    page: str = Field(default="home", max_length=50)

# --- Dynamic Data Store ---
SKILLS_DATA = [
    {"name": "Python", "category": "Language", "thought": "Where whitespace matters more than my own opinions."},
    {"name": "FastAPI", "category": "Backend", "thought": "Fast, async, and heavily typed. Running live on this EC2 instance."},
    {"name": "React", "category": "Frontend", "thought": "HTML inside JavaScript inside HTML. Brilliant."},
    {"name": "Node.js", "category": "Backend", "thought": "Single-threaded chaos that somehow runs the entire internet."},
    {"name": "AWS EC2 & S3", "category": "Cloud", "thought": "EC2 compute running this backend while S3 hosts the frontend."},
    {"name": "Docker", "category": "DevOps", "thought": "'It works on my machine'... and now it works on yours too."},
    {"name": "PostgreSQL", "category": "Database", "thought": "Because NoSQL is fun until you need actual, reliable relationships."},
    {"name": "LangChain & AI", "category": "AI/ML", "thought": "Gluing LLMs together until they hallucinate something actually useful."}
]

PROJECTS_DATA = {
    "fullstack": [
        {"name": "SaaS Platform", "tech": ["React", "FastAPI", "PostgreSQL"], "desc": "Scalable multi-tenant SaaS application with JWT auth and stripe billing."},
        {"name": "AWS Full-Stack Portfolio", "tech": ["FastAPI", "AWS EC2", "AWS S3", "Vanilla JS"], "desc": "Dual-cloud deployed portfolio featuring serverless S3 hosting and EC2 API backend."},
        {"name": "AI Support Assistant", "tech": ["FastAPI", "Redis", "React", "WebSockets"], "desc": "Real-time AI customer support platform with streaming responses."}
    ],
    "ai": [
        {"name": "RAG AI Chatbot", "tech": ["LangChain", "FAISS", "FastAPI", "OpenAI"], "desc": "Context-aware question answering system on unstructured PDF documents."},
        {"name": "Document Intelligence", "tech": ["LangChain", "Hugging Face", "FastAPI"], "desc": "Automated semantic extraction and vector search over large text corpuses."}
    ]
}

# --- API Endpoints ---

@app.get("/")
def root(request: Request):
    """
    Root route:
    - Returns JSON status when queried by API / curl
    - Serves the portfolio page when accessed from a web browser
    """
    accept = request.headers.get("accept", "")
    if "application/json" in accept and "text/html" not in accept:
        return {
            "status": "online",
            "service": "Acharya Portfolio Cloud API",
            "docs_url": "/docs",
            "timestamp": datetime.utcnow().isoformat()
        }
    
    index_file = PROJECT_ROOT / "html" / "index.html"
    if index_file.exists():
        return FileResponse(str(index_file))
    return RedirectResponse(url="/docs")

@app.get("/api")
def api_root():
    return {
        "status": "online",
        "service": "Acharya Portfolio Cloud API",
        "docs_url": "/docs",
        "timestamp": datetime.utcnow().isoformat()
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "server": "AWS EC2",
        "timestamp": datetime.utcnow().isoformat(),
        "database": "sqlite_connected"
    }

@app.get("/api/skills")
def get_skills():
    return {"skills": SKILLS_DATA, "count": len(SKILLS_DATA)}

@app.get("/api/projects")
def get_projects():
    return {"projects": PROJECTS_DATA}

@app.post("/api/contact")
def submit_contact_form(payload: ContactFormRequest, request: Request):
    client_ip = request.client.host if request.client else "unknown"
    created_at = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")

    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO messages (name, email, message, created_at, ip_address) VALUES (?, ?, ?, ?, ?)",
            (payload.name.strip(), payload.email.strip(), payload.message.strip(), created_at, client_ip)
        )
        conn.commit()
        msg_id = cursor.lastrowid
        conn.close()

        return {
            "success": True,
            "message": "Message successfully saved to AWS EC2 backend database!",
            "message_id": msg_id,
            "received_at": created_at
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

@app.get("/api/messages")
def get_all_messages():
    """Endpoint to inspect messages received on the EC2 server."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, email, message, created_at, ip_address FROM messages ORDER BY id DESC")
    rows = cursor.fetchall()
    conn.close()

    messages = [dict(row) for row in rows]
    return {
        "total": len(messages),
        "messages": messages
    }

@app.post("/api/visit")
def record_visit(payload: VisitRequest, request: Request):
    client_ip = request.client.host if request.client else "unknown"
    user_agent = request.headers.get("user-agent", "unknown")
    visited_at = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")

    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO visits (page, visited_at, user_agent, ip_address) VALUES (?, ?, ?, ?)",
            (payload.page, visited_at, user_agent, client_ip)
        )
        conn.commit()
        conn.close()
        return {"status": "recorded"}
    except Exception:
        return {"status": "error_recording_visit"}

@app.get("/api/stats")
def get_stats():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM messages")
    msg_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM visits")
    visit_count = cursor.fetchone()[0]
    conn.close()

    return {
        "total_messages_received": msg_count,
        "total_page_visits": visit_count,
        "server_status": "active",
        "architecture": "AWS EC2 Backend + AWS S3 Serverless Frontend"
    }

# --- Mount Static Assets ---
# Serves CSS, JS, Assets, and HTML pages directly from the project root
if (PROJECT_ROOT / "css").exists():
    app.mount("/css", StaticFiles(directory=str(PROJECT_ROOT / "css")), name="css")
if (PROJECT_ROOT / "js").exists():
    app.mount("/js", StaticFiles(directory=str(PROJECT_ROOT / "js")), name="js")
if (PROJECT_ROOT / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(PROJECT_ROOT / "assets")), name="assets")
if (PROJECT_ROOT / "html").exists():
    app.mount("/html", StaticFiles(directory=str(PROJECT_ROOT / "html")), name="html")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host=config.HOST, port=config.PORT, reload=True)

