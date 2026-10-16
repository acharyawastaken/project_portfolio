// ==========================================================
// Cloud Backend Configuration for Acharya Portfolio
// ==========================================================
// 1. When testing locally:
//    const BASE_URL = "http://localhost:8000";
//
// 2. When deployed to AWS EC2:
//    Replace with your EC2 backend's Public IPv4 address:
//    const BASE_URL = "http://<YOUR_EC2_PUBLIC_IP>:8000";
//
// 3. When frontend is hosted on AWS S3 or EC2 client:
//    Requests will automatically route to this BASE_URL
// ==========================================================

// Determine the appropriate API BASE_URL dynamically:
// 1. If explicitly set via window.__API_URL__, use that
// 2. If running locally (localhost, 127.0.0.1, or local file), use "http://localhost:8000"
// 3. When deployed on Render (or any cloud domain), use window.location.origin automatically
const isLocal = window.location.hostname === "localhost" || 
                window.location.hostname === "127.0.0.1" || 
                window.location.protocol === "file:";

const resolvedBaseUrl = (typeof window !== "undefined" && window.__API_URL__) ? 
    window.__API_URL__ : 
    (isLocal ? "http://localhost:8000" : window.location.origin);

const CONFIG = {
    BASE_URL: resolvedBaseUrl,
    IS_LOCAL: isLocal,
    API_TIMEOUT_MS: 4000
};

// Global shorthand for convenience
const BASE_URL = CONFIG.BASE_URL;

