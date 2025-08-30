# Standard Imports
import sys
from pathlib import Path
import pytest

from tests.models.test_deals import TestProductModels
from tests.routers.test_products import TestProductsRouter
from tests.test_main import TestCORSConfiguration


# Add the backend directory to Python path
sys.path.insert(0, str(Path(__file__).parent.parent))



if __name__ == "__main__":
    # Allow running the test file directly
    pytest.main([__file__])
