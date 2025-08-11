from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.internal import auth
from app.routers import products, users
from config.config import front_end_dev_url, front_end_prod_url

app = FastAPI(root_path="/api")

origins = [front_end_dev_url, front_end_prod_url]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router)
app.include_router(auth.router)
app.include_router(users.router)


@app.get("/")
async def root():
    return {"message": "ShopNex Welcomes You"}
