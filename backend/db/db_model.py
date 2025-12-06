import os
import dotenv
from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey,
    URL,
    BLOB,
    BigInteger,
    func,
    TIMESTAMP,
    Text,
    create_engine
)
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

    posts = relationship("Post", back_populates="users")
    messages = relationship("Messages", back_populates="users")

    # add followers and following relationship


class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    content = Column(String(500), nullable=False)
    image = Column(BLOB, nullable=True)
    created_at = Column(String(50), nullable=False)

    user = relationship("User", back_populates="posts")


class Follows(Base):
    __tablename__ = "follows"

    follower_id = Column(
        BigInteger, ForeignKey("users.id", ondelete="CASCADE"), primary_key=True
    )
    following_id = Column(
        BigInteger, ForeignKey("users.id", ondelete="CASCADE"), primary_key=True
    )
    followed_at = Column(TIMESTAMP, server_default=func.now())


class Messages(Base):
    # add archiving mechanism later

    __tablename__ = "messages"

    message_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"))
    created_at = Column(TIMESTAMP, server_default=func.now())
    content = Column(Text, nullable=False)


dotenv.load_dotenv()
engine = create_engine(os.getenv("DATABASE_URL"), echo=True)

Base.metadata.create_all(engine)
