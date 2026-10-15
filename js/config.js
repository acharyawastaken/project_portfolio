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

const CONFIG = {
    // Default to localhost for testing; change this to your EC2 Public IP once launched
    BASE_URL: "http://localhost:8000",
    IS_LOCAL: window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1",
    API_TIMEOUT_MS: 4000
};

// Global shorthand for convenience matching the agenda
const BASE_URL = CONFIG.BASE_URL;
