from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated
from db.db_model import engine, Post

from sqlalchemy.orm import Session

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/upload")
async def upload_endpoint(file: Annotated[UploadFile, File()]):
    if not file.content_type.startswith("image/"):
        HTTPException(status_code=400, detail="only images are allowed to be uploaded")
    image = await file.read()

    with Session(engine) as session:
        new_post = Post(user_id=1, content="Uploaded image", image=image)
        session.add(new_post)
        session.commit()
    return {
        "message": "Upload successful",
        "filename": file.filename,
        "content_type": file.content_type,
    }
