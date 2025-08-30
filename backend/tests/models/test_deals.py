from models.products import SearchFormDataDTO
import pytest


class TestProductModels:
    """Test cases for Pydantic models."""
    
    def test_search_form_data_dto_valid(self):
        """Test SearchFormDataDTO with valid data."""
        valid_data = {
            "searchText": "laptop",
            "isFilterApplied": True,
            "FINAL_PRICE": [100.0, 2000.0],
            "CURRENCY": "USD",
            "RATING": 4.0,
            "STOCK": 50
        }
        
        dto = SearchFormDataDTO(**valid_data)
        
        assert dto.searchText == "laptop"
        assert dto.isFilterApplied is True
        assert dto.FINAL_PRICE == [100.0, 2000.0]
        assert dto.CURRENCY == "USD"
        assert dto.RATING == 4.0
        assert dto.STOCK == 50

    def test_search_form_data_dto_minimal(self):
        """Test SearchFormDataDTO with all required fields."""
        # Based on the actual model, all fields except isFilterApplied are required
        minimal_data = {
            "searchText": "phone",
            "FINAL_PRICE": None,
            "CURRENCY": None,
            "RATING": None,
            "STOCK": None
        }
        
        dto = SearchFormDataDTO(**minimal_data)
        
        assert dto.searchText == "phone"
        assert dto.isFilterApplied is False  # Default value
        assert dto.FINAL_PRICE is None
        assert dto.CURRENCY is None
        assert dto.RATING is None
        assert dto.STOCK is None

    def test_search_form_data_dto_invalid(self):
        """Test SearchFormDataDTO with invalid data."""
        with pytest.raises(Exception):  # Pydantic ValidationError
            SearchFormDataDTO()  # Missing required searchText
