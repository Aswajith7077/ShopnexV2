

class TestRootEndpoint:
    """Test cases for the root endpoint."""
    
    def test_root_endpoint(self,client):
        """Test that the root endpoint returns welcome message."""
        response = client.get("/")
        assert response.status_code == 200
        assert response.json() == {"message": "Zevrin Welcomes You"}
