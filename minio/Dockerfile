# Start from official MinIO image
FROM minio/minio:latest AS minio

# Use lightweight nginx base
FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Copy MinIO binary from original image
COPY --from=minio /usr/bin/minio /usr/bin/minio

# Expose single port (Railway only allows one)
EXPOSE 8080

ENTRYPOINT ["/entrypoint.sh"]
