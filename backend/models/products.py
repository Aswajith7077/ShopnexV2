# Standard Imports
from enum import Enum
from typing import Optional

# Third Party Imports
from pydantic import BaseModel
from pydantic import Field


class ContentAlignmentEnum(Enum):
    left = "left"
    right = "right"


class BannerBlobDTO(BaseModel):
    bucket: str
    file_path: str
    file_name: str


class BannerResponseDTO(BaseModel):
    title: str
    description: str
    deal_page: str
    banner: BannerBlobDTO
    file_url: str
    content_alignment: ContentAlignmentEnum
    text_color: str


class SearchFormDataDTO(BaseModel):
    searchText: str
    isFilterApplied: bool = Field(default=False)
    FINAL_PRICE: Optional[list[float]]
    CURRENCY: Optional[str]
    RATING: Optional[float]
    STOCK: Optional[int]
