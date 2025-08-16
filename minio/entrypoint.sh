#!/bin/sh

# Set default values if environment variables are not provided
export MINIO_ROOT_USER=${MINIO_ROOT_USER:-minioadmin}
export MINIO_ROOT_PASSWORD=${MINIO_ROOT_PASSWORD:-minioadmin}
export MINIO_CONSOLE_ADDRESS=${MINIO_CONSOLE_ADDRESS:-:9001}
export MINIO_ADDRESS=${MINIO_ADDRESS:-:9000}

# Create data directory
mkdir -p /data

# Start MinIO server in background
echo "Starting MinIO server..."
/usr/bin/minio server /data \
    --address $MINIO_ADDRESS \
    --console-address $MINIO_CONSOLE_ADDRESS &

# Wait for MinIO to start
echo "Waiting for MinIO to start..."
sleep 5

# Check if MinIO is running
if ! pgrep -f "minio server" > /dev/null; then
    echo "ERROR: MinIO failed to start"
    exit 1
fi

echo "MinIO started successfully"
echo "API running on port 9000"
echo "Console running on port 9001"

# Test MinIO health
timeout 10 sh -c 'until nc -z localhost 9000; do sleep 1; done' || {
    echo "ERROR: MinIO API not responding"
    exit 1
}

timeout 10 sh -c 'until nc -z localhost 9001; do sleep 1; done' || {
    echo "ERROR: MinIO Console not responding"
    exit 1
}

echo "Starting nginx..."
# Start nginx in foreground
exec nginx -g "daemon off;"