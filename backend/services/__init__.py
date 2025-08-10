from config.file_blob import minio_client
from services.file_blob import BucketService

bucket_service = BucketService(minio_client)
