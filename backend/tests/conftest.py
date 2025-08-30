# backend/tests/conftest.py
import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.dependencies import check_access_token

def mock_check_access_token():
    return None

@pytest.fixture(scope="session", autouse=True)
def override_dependencies():
    app.dependency_overrides[check_access_token] = mock_check_access_token
    yield
    app.dependency_overrides.clear()

@pytest.fixture(scope="module")
def client(override_dependencies):
    with TestClient(app) as c:
        yield c
