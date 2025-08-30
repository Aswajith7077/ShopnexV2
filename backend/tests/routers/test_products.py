from unittest.mock import patch


class TestProductsRouter:
    """Test cases for the products router endpoints."""
    
    @patch("services.application.product_service.get_products")
    def test_list_products(self, mock_get_products, client):
        """Test listing products with limit parameter."""
        # Mock the service response
        mock_products = [
            {"id": "1", "name": "Product 1", "price": 10.99},
            {"id": "2", "name": "Product 2", "price": 15.99}
        ]
        mock_get_products.return_value = mock_products
        
        # Make request
        response = client.get("/products/list_products?limit=10")
        
        # Assertions
        assert response.status_code == 200
        assert response.json() == mock_products
        mock_get_products.assert_called_once_with(limit=10)

    @patch("services.application.product_service.retrive_product_details")
    def test_get_product_details(self, mock_get_details, client):
        """Test getting product details by ID."""
        # Mock the service response with DESC that needs splitting
        mock_product = {
            "id": "123",
            "name": "Test Product",
            "DESC": "Feature 1ã€Feature 2ã€Feature 3",
            "price": 29.99
        }
        mock_get_details.return_value = mock_product
        
        # Make request
        response = client.get("/products/get_details?id=123")
        
        # Assertions
        assert response.status_code == 200
        result = response.json()
        assert result["id"] == "123"
        assert result["name"] == "Test Product"
        assert result["DESC"] == ["Feature 1", "Feature 2", "Feature 3"]
        assert result["price"] == 29.99
        mock_get_details.assert_called_once_with("123")

    @patch("services.application.product_service.search_product_details")
    def test_search_products(self, mock_search, client):
        """Test searching products with form data."""
        # Mock search results
        mock_results = [
            {"id": "1", "name": "Search Result 1"},
            {"id": "2", "name": "Search Result 2"}
        ]
        mock_search.return_value = mock_results
        
        # Test data
        search_data = {
            "searchText": "test product",
            "isFilterApplied": True,
            "FINAL_PRICE": [10.0, 50.0],
            "CURRENCY": "USD",
            "RATING": 4.5,
            "STOCK": 100
        }
        
        # Make request
        response = client.post("/products/search", json=search_data)
        
        # Assertions
        assert response.status_code == 200
        assert response.json() == mock_results
        mock_search.assert_called_once()

    @patch("services.application.banner_service.list_all_banners")
    def test_list_banners_success(self, mock_list_banners, client):
        """Test listing banners successfully."""
        # Mock successful banner service response
        mock_banners = [
            {"id": "1", "title": "Banner 1"},
            {"id": "2", "title": "Banner 2"}
        ]
        mock_list_banners.return_value = (True, mock_banners)
        
        # Make request
        response = client.get("/products/list_banners")
        
        # Assertions
        assert response.status_code == 200
        assert response.json() == mock_banners
        mock_list_banners.assert_called_once()

    @patch("services.application.banner_service.list_all_banners")
    def test_list_banners_failure(self, mock_list_banners, client):
        """Test listing banners when service returns error."""
        # Mock failed banner service response
        error_message = "Failed to fetch banners"
        mock_list_banners.return_value = (False, error_message)
        
        # Make request
        response = client.get("/products/list_banners")
        
        # Assertions
        assert response.status_code == 400
        assert response.json() == {"detail": error_message}
        mock_list_banners.assert_called_once()