#!/bin/sh
set -e

# Start MinIO (API on 9000, Console on 9001)
minio server /data --address ":9000" --console-address ":9001" &

# Start Nginx in foreground
nginx -g "daemon off;"
