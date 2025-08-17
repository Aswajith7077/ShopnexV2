# Standard imports
# Standard Imports
from datetime import datetime
from datetime import timezone

# FastAPI Imports
# Fastapi imports
from fastapi import Header
from fastapi import HTTPException
from fastapi import status

# Zevrin Imports
# Zevrin imports
from config.config import jwt_access_token_expiry_time_minutes
from services.application import current_user_service


async def check_access_token(authorization=Header(None)):
    if authorization is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="No Bearer Token Present"
        )

    header_values = authorization.split()
    if len(header_values) < 1:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="No Bearer Token Present"
        )

    access_token = header_values[1]
    result = await current_user_service.get_current_user_by_access_token(
        access_token.encode()
    )
    if result is None:
        raise ValueError("Invalid Token")
    difference = datetime.now(timezone.utc) - datetime.fromisoformat(
        result["lastlogin"]
    )
    difference_in_minutes = difference.total_seconds() / 60

    if difference_in_minutes >= jwt_access_token_expiry_time_minutes:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Token Expired"
        )
    else:
        return result
