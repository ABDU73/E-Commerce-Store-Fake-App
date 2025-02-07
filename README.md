# E-Commerce Store

Welcome to the E-Commerce Store! This is a full-stack web application designed to provide an e-commerce experience, where users can browse products, add them to a cart, and complete transactions.

## Setup .env file

Before running the app, you need to set up the `.env` file with the following environment variables:

```bash
PORT=5000
MONGO_URI=your_mongo_connection_string

UPSTASH_REDIS_URL=your_redis_url

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key 
CLIENT_URL=http://localhost:5173
NODE_ENV=development

```bash for env.local

STRIPE_SECRET_PUBLISHABLE_KEY=your_stripe_PUBLISHABLE_key
