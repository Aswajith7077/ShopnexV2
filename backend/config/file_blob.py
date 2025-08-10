from urllib.parse import urlparse

from minio import Minio
from minio.error import S3Error

from config.config import (
    debug,
    minio_access_key,
    minio_port,
    minio_secret_key,
    minio_server,
)

try:
    # Initialize MinIO client
    parsed_url = urlparse(minio_server)
    minio_host = parsed_url.hostname or minio_server  # fallback if no scheme present
    secure = parsed_url.scheme == "https" and not debug

    minio_client = Minio(
        endpoint=minio_host,
        access_key=minio_access_key,
        secret_key=minio_secret_key,
        secure=secure,
    )

    buckets = minio_client.list_buckets()
    print("MinIO Connection Successful. Buckets:", [bucket.name for bucket in buckets])
except S3Error as e:
    print("MinIO S3 Error:", e)
except Exception as e:
    print("MinIO Connection Error:", e)
