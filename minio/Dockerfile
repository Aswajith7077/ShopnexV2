# Start from official MinIO image
FROM minio/minio:latest AS minio

# Use lightweight nginx base
FROM nginx:alpine

# Install netcat for health checks
RUN apk add --no-cache netcat-openbsd

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Copy MinIO binary from original image
COPY --from=minio /usr/bin/minio /usr/bin/minio

# Create data directory
RUN mkdir -p /data

# Set default environment variables
ENV MINIO_ROOT_USER=minioadmin
ENV MINIO_ROOT_PASSWORD=minioadmin
ENV MINIO_CONSOLE_ADDRESS=:9001
ENV MINIO_ADDRESS=:9000

# Expose single port (Railway only allows one)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD nc -z localhost 9000 && nc -z localhost 9001 && curl -f http://localhost:8080/health || exit 1

ENTRYPOINT ["/entrypoint.sh"]