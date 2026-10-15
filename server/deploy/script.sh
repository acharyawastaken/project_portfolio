#!/bin/bash
# ==========================================================
# Automated Deployment Script for Acharya Portfolio Backend
# ==========================================================

echo "==> [1/4] Updating packages and installing dependencies..."
sudo dnf update -y
sudo dnf install -y git python3 python3-pip

echo "==> [2/4] Installing Python requirements..."
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVER_DIR="$(dirname "$SCRIPT_DIR")"
cd "$SERVER_DIR" || exit 1

pip3 install -r requirements.txt

echo "==> [3/4] Stopping any existing uvicorn instances..."
pkill -f uvicorn || true

echo "==> [4/4] Starting FastAPI backend on 0.0.0.0:8000..."
nohup python3 -m uvicorn main:app --host 0.0.0.0 --port 8000 > app.log 2>&1 &

sleep 2
if ps aux | grep -v grep | grep uvicorn > /dev/null; then
    echo "=========================================================="
    echo "✅ Portfolio Backend started successfully!"
    echo "🌐 Access Swagger UI: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 || echo '<EC2_PUBLIC_IP>'):8000/docs"
    echo "📄 Application log: $SERVER_DIR/app.log"
    echo "=========================================================="
else
    echo "❌ Failed to start uvicorn. Check logs below:"
    cat app.log
fi
