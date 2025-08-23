# Zevrin Imports
from config.database import categories_collection
from models.categories import CategoryBlobDataDTO
from models.categories import CategoryDTO
from models.categories import CategoryImageDTO
from models.categories import SubCategoryDTO
from services import file_blob_service


class CategoryService:

    async def list_categories(self):

        # try:
        categories = list(categories_collection.find({}))
        category_dtos = []

        for category in categories:
            category.pop("_id")
            blob_dto = CategoryBlobDataDTO(
                bucket=category["blob_data"]["bucket"],
                file_path=category["blob_data"]["file_path"],
            )

            sub_category_dtos = []
            for sub_category in category["sub_categories"]:
                image_dto = CategoryImageDTO(
                    file_name=sub_category["image"]["file_name"], image_url=""
                )
                status, image_url = file_blob_service.get_file_url(
                    bucket_name=blob_dto.bucket,
                    object_name="/".join([blob_dto.file_path, image_dto.file_name]),
                )

                if not status:
                    return False, image_url

                image_dto.image_url = image_url

                sub_category_dto = SubCategoryDTO(
                    title=sub_category["title"], image=image_dto, redirect_url=""
                )
                sub_category_dtos.append(sub_category_dto)

            category_dto = CategoryDTO(
                title=category["title"],
                blob_data=blob_dto,
                redirect_url="",
                sub_categories=sub_category_dtos,
            )
            category_dtos.append(category_dto)

        return True, category_dtos

    # except Exception as e:
    #     print(e)
    #     return False, e.args
