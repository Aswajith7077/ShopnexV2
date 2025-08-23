# Standard Imports
import os

# Third Party Imports
from dotenv import load_dotenv

load_dotenv()

debug = not (os.getenv("DEBUG") == "False")
jwt_encode_algorithm = os.getenv("JWT_ENCODE_ALGORITHM")
jwt_access_token_secret_key = os.getenv("JWT_ACCESS_TOKEN_SECRET_KEY")
jwt_refresh_token_secret_key = os.getenv("JWT_REFRESH_TOKEN_SECRET_KEY")
jwt_access_token_expiry_time_minutes: int = int(
    os.getenv("JWT_ACCESS_TOKEN_EXPIRE_TIME_MINUTES")
)
jwt_refresh_token_expiry_time_minutes: int = int(
    os.getenv("JWT_REFRESH_TOKEN_EXPIRE_TIME_MINUTES")
)

front_end_prod_url = os.getenv("FRONT_END_PROD_URL")
front_end_dev_url = os.getenv("FRONT_END_DEV_URL")

db_password = os.getenv("DB_PASSWORD")
db_user = os.getenv("DB_USER")
db_host = os.getenv("DB_HOST")
db_name = os.getenv("DB_NAME")
db_url = f"mongodb+srv://{db_user}:{db_password}@{db_host}/{db_name}?retryWrites=true&w=majority&appName=Cluster0"

collection_product = os.getenv("COLLECTION_PRODUCTS")
collection_user = os.getenv("COLLECTION_USER")
collection_cart = os.getenv("COLLECTION_CART")
collection_promotion = os.getenv("COLLECTION_PROMOTION")
collection_banner = os.getenv("COLLECTION_BANNERS")
collection_categories = os.getenv("COLLECTION_CATEGORIES")

minio_server = (
    os.getenv("MINIO_PROD_SERVER") if not debug else os.getenv("MINIO_SERVER")
)
minio_port = os.getenv("MINIO_PORT")
minio_access_key = os.getenv("MINIO_ROOT_USER")
minio_secret_key = os.getenv("MINIO_ROOT_PASSWORD")
