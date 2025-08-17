# FastAPI Imports
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from fastapi import Response
from fastapi import status

# Zevrin Imports
from app.dependencies import check_access_token
from models.users import User
from services.application import user_service

router = APIRouter(
    prefix="/users",
    dependencies=[Depends(check_access_token)],
    tags=["Users"],
)


@router.get("/get_user/{id}")
async def get_single_user(id: str):

    result, e = await user_service.find_single_user(id)
    if e is not None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail={"message": e})

    result.pop("_id")
    return result


@router.put("/update_user/")
async def update_single_user(username: str, user: User):

    result, exception = await user_service.update_user(username, user)
    if result:
        return Response(status_code=status.HTTP_202_ACCEPTED, content="User Updated")
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail={"message": exception}
    )
