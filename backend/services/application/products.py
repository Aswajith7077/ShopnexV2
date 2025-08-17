# Standard Imports
import re

# Zevrin Imports
from config.database import banner_collection
from config.database import product_collection
from models.products import BannerBlobDTO
from models.products import BannerResponseDTO
from models.products import SearchFormDataDTO
from services import file_blob_service


class ProductService:
    async def get_products(self, limit: int = 10):

        try:
            result = list(
                product_collection.find({"CATEGORIES": "Electronics"}).limit(limit)
            )
            for i in range(len(result)):
                result[i].pop("_id")
                result[i].pop("INITIAL_PRICE")
                result[i].pop("DESC")
                result[i]["CATEGORIES"] = result[i]["CATEGORIES"][:2]
                result[i]["IMAGES"] = result[i]["IMAGES"][0]
                result[i].pop("VARIATIONS")
                result[i].pop("REFERAL_LINK")
                result[i].pop("DOMAIN")
                result[i].pop("SELLER_NAME")
                result[i].pop("FEATURES")
                result[i].pop("REVIEWS")
            return result
        except Exception as e:
            print(e)
            return e.args

    async def retrive_product_details(self, id: str):

        try:
            result = product_collection.find_one({"NAME": id})
            result.pop("_id")
            return result
        except Exception as e:
            return e.args

    async def search_product_details(self, form_data: SearchFormDataDTO):

        try:
            pattern = re.compile(".*" + form_data.searchText + ".*", re.IGNORECASE)
            names = product_collection.find({"NAME": pattern}).limit(10)
            brand = product_collection.find({"BRAND": pattern}).limit(10)
            categories = product_collection.find(
                {"CATEGORIES": {"$elemMatch": {"$regex": pattern}}}
            ).limit(10)
            sellers = product_collection.find({"SELLER_NAME": pattern}).limit(10)

            names = list(names)
            brand = list(brand)
            categories = list(categories)
            sellers = list(sellers)

            result = names + brand + sellers + categories

            for i in range(len(result)):
                result[i].pop("_id")
                result[i].pop("INITIAL_PRICE")
                result[i].pop("DESC")
                result[i]["IMAGES"] = result[i]["IMAGES"][0]
                result[i].pop("VARIATIONS")
                result[i].pop("REFERAL_LINK")
                result[i].pop("DOMAIN")
                result[i].pop("FEATURES")
                result[i].pop("REVIEWS")

            print("Result : ", len(names), len(brand), len(sellers))
            return result

        except Exception as e:
            return e


class BannerService:
    async def list_all_banners(self):
        try:
            banners = list(banner_collection.find({}))
            banner_dtos = []

            for banner in banners:
                banner.pop("_id")
                banner_blob = BannerBlobDTO(**banner.pop("banner"))
                banner_dto = BannerResponseDTO(
                    **banner, banner=banner_blob, file_url=""
                )
                status, file_url = file_blob_service.get_file_url(
                    bucket_name=banner_blob.bucket,
                    object_name="/".join(
                        [banner_blob.file_path, banner_blob.file_name]
                    ),
                )

                if not status:
                    raise Exception(f"File Download Failed: {file_url}")

                banner_dto.file_url = file_url
                banner_dtos.append(banner_dto)

            return True, banner_dtos
        except Exception as e:
            return False, e.args
