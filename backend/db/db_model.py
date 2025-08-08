from sqlalchemy import Column, Integer, String, ForeignKey, URL, BLOB
from sqlalchemy.orm import declarative_base, DeclarativeBase, relationship

Base: DeclarativeBase = declarative_base()


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), nullable=False, unique=True)
    auth_user_id = Column(String(50), nullable=False, unique=True)
    email = Column(String(100), nullable=False, unique=True)
    image = Column(URL(), nullable=True)
    followers = Column(Integer, default=0)
    following = Column(Integer, default=0)

    posts = relationship("Post", back_populates="user")


class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    content = Column(String(500), nullable=False)
    image = Column(BLOB, nullable=True)
    created_at = Column(String(50), nullable=False)

    user = relationship("User", back_populates="posts")

#remaining tables: 
# followers-following
# messages with archiving mechanism
# images table later replace with S3



