# Shopnex Backend

Shopnex Backend is a scalable and high-performance API developed using FastAPI, designed to support e-commerce applications. It utilizes MongoDB for data storage following the MVC architecture, ensures secure authentication and authorization via JWT, and is fully containerized using Docker for seamless deployment on Azure Container Apps.

## Features
- **FastAPI**: High-performance Python web framework.
- **MongoDB**: NoSQL database following MVC architecture.
- **JWT Authentication**: Secure authentication and authorization.
- **Docker**: Containerized for portability and scalability.

## Prerequisites
Ensure you have the following installed:
- Python 3.8+
- MongoDB
- Docker

## Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/shopnex-backend.git
   cd shopnex-backend
   ```
2. **Create and Activate Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```
3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```
4. **Set Up Environment Variables**
   Create a `.env` file and add:
   ```env
   MONGO_URI="your_mongodb_connection_string"
   SECRET_KEY="your_jwt_secret_key"
   ```
5. **Run the Application**
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

## API Endpoints
### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - User login
- `GET /auth/profile` - Fetch user profile (Requires JWT)

### Products
- `GET /products` - Get all products
- `POST /products` - Add a new product (Admin only)
- `GET /products/{id}` - Get product details
- `PUT /products/{id}` - Update product (Admin only)
- `DELETE /products/{id}` - Delete product (Admin only)

## Docker Setup
1. **Build Docker Image**
   ```bash
   docker build -t shopnex-backend .
   ```
2. **Run Docker Container**
   ```bash
   docker run -d -p 8000:8000 --env-file .env shopnex-backend
   ```

## License
This project is licensed under the MIT License.

## Author
Developed by [Aswajith S](https://github.com/Aswajith7077).
