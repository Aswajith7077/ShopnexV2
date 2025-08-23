# Standard Imports
from typing import List

# Third Party Imports
from pydantic import BaseModel


class CategoryImageDTO(BaseModel):
    image_url: str
    file_name: str


class CategoryBlobDataDTO(BaseModel):
    bucket: str
    file_path: str


class SubCategoryDTO(BaseModel):
    title: str
    image: CategoryImageDTO
    redirect_url: str


class CategoryDTO(BaseModel):
    title: str
    blob_data: CategoryBlobDataDTO
    redirect_url: str
    sub_categories: List[SubCategoryDTO]
