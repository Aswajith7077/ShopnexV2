# Standard Imports
from urllib.parse import urlparse

# Third Party Imports
from minio import Minio
from minio.error import S3Error

# Zevrin Imports
from config.config import minio_access_key
from config.config import minio_secret_key
from config.config import minio_server

try:
    parsed_url = urlparse(minio_server)
    if parsed_url.port:
        endpoint = f"{parsed_url.hostname}:{parsed_url.port}"
    else:
        endpoint = parsed_url.hostname

    secure = parsed_url.scheme == "https"

    minio_client = Minio(
        endpoint=endpoint,
        access_key=minio_access_key,
        secret_key=minio_secret_key,
        secure=secure,
    )

    # Test connection
    buckets = minio_client.list_buckets()
    print("✅ MinIO Connection Successful. Buckets:", [bucket.name for bucket in buckets])

except S3Error as e:
    print("❌ MinIO S3 Error:", e)
except Exception as e:
    print("❌ MinIO Connection Error:", e)
