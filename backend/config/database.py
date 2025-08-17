# Third Party Imports
from pymongo import MongoClient

# Zevrin Imports
from config.config import collection_banner
from config.config import collection_cart
from config.config import collection_product
from config.config import collection_promotion
from config.config import collection_user
from config.config import db_name
from config.config import db_url

client = None
db = None

user_collection = None
product_collection = None
cart_collection = None
promotion_collection = None


try:
    client = MongoClient(db_url)

    db = client[db_name]

    user_collection = db[collection_user]
    product_collection = db[collection_product]
    cart_collection = db[collection_cart]
    promotion_collection = db[collection_promotion]
    banner_collection = db[collection_banner]

    print("Connection Successfull")

except Exception as e:

    print("Mongo DB Error : ", e)
