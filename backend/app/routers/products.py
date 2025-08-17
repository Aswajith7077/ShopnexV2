# FastAPI Imports
from fastapi import APIRouter
from fastapi import Body
from fastapi import Depends
from fastapi import HTTPException
from fastapi import Query
from fastapi import status

# Zevrin Imports
from app.dependencies import check_access_token
from models.products import SearchFormDataDTO
from services.application import banner_service
from services.application import product_service

router = APIRouter(
    prefix="/products",
    dependencies=[Depends(check_access_token)],
    tags=["Products"],
)


@router.get("/list_products")
async def list_products(limit: int = Query()):
    result = await product_service.get_products(limit=limit)
    return result


@router.get("/get_details")
async def get_product_details(id: str):
    result = await product_service.retrive_product_details(id)
    result["DESC"] = result["DESC"].split("ã€")
    return result


@router.post("/search")
async def search_products(form_data: SearchFormDataDTO = Body()):
    result = await product_service.search_product_details(form_data=form_data)
    return result


@router.get("/list_banners")
async def list_banners():
    result_status, result = await banner_service.list_all_banners()
    if not result_status:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=result)
    return result
