# Zevrin Imports
from config.file_blob import minio_client
from services.file_blob import FileBlobService

file_blob_service = FileBlobService(minio_client)
