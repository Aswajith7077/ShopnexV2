# Zevrin Imports
from services.application.auth import AuthenticationService
from services.application.auth import CurrentUserService
from services.application.categories import CategoryService
from services.application.products import BannerService
from services.application.products import ProductService
from services.application.users import UserService

current_user_service = CurrentUserService()
authentication_service = AuthenticationService()
user_service = UserService()
product_service = ProductService()
banner_service = BannerService()
category_service = CategoryService()
