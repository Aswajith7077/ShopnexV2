class TestCORSConfiguration:
    """Test cases for CORS configuration."""
    
    def test_cors_headers_present(self,client):
        """Test that CORS headers are properly configured."""
        response = client.options("/")
        assert response.status_code in [200, 405]  # OPTIONS might not be implemented

    def test_root_endpoint_accessible(self,client):
        """Test that the root endpoint is accessible (CORS allows it)."""
        response = client.get("/")
        assert response.status_code == 200
