"""
Configuration settings for Acharya Portfolio Backend API
Follows the exercise configuration pattern:
- FRONTEND_URL: Used by CORS middleware to allow requests from the frontend
  (e.g., S3 Static Website URL or EC2 Frontend IP)
- HOST & PORT: Network binding for uvicorn
"""

import os

# During development, default to "*" (allow all origins including localhost & S3)
# In production on AWS, set this to your S3 bucket website endpoint or EC2 frontend IP:
# Example: FRONTEND_URL = "http://my-portfolio-bucket.s3-website.ap-southeast-2.amazonaws.com"
FRONTEND_URL = os.getenv("FRONTEND_URL", "*")

# Host and Port (Render provides $PORT dynamic environment variable)
HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", 8000))

