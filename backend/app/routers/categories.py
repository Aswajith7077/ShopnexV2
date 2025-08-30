# FastAPI Imports
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from fastapi import status

# Zevrin Imports
from app.dependencies import check_access_token
from services.application import category_service

router = APIRouter(
    prefix="/categories",
    dependencies=[Depends(check_access_token)],
    tags=["Categories"],
)


@router.get("/list_categories")
async def get_single_user():

    is_error, result = await category_service.list_categories()
    if not is_error:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail={"message": result.args})

    print(result)
    return result
