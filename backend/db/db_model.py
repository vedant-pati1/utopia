import os
import dotenv
from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey,
    LargeBinary,
    Text,
    TIMESTAMP,
    func,
    create_engine,
)
from sqlalchemy.orm import declarative_base, relationship

dotenv.load_dotenv()

Base = declarative_base()


class FollowAssociation(Base):
    __tablename__ = "follow_association"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    follower_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    followed_at = Column(TIMESTAMP(timezone=True), server_default=func.now())


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100))
    username = Column(String(50), nullable=False, unique=True)
    auth_user_id = Column(String(50), nullable=False, unique=True)
    email = Column(String(100), nullable=False, unique=True)
    profile_image = Column(String(255))

    # One-to-many: User → Posts
    posts = relationship("Post", back_populates="user", cascade="all, delete-orphan")

    # Self-referential many-to-many (followers)
    followers = relationship(
        "User",
        secondary="follow_association",
        primaryjoin=id == FollowAssociation.user_id,
        secondaryjoin=id == FollowAssociation.follower_id,
        back_populates="following",
    )

    following = relationship(
        "User",
        secondary="follow_association",
        primaryjoin=id == FollowAssociation.follower_id,
        secondaryjoin=id == FollowAssociation.user_id,
        back_populates="followers",
    )

    messages = relationship(
        "Message", back_populates="user", cascade="all, delete-orphan"
    )


class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    content = Column(String(500), nullable=False)
    image = Column(LargeBinary)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="posts")


class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(
        Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False
    )
    content = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="messages")


engine = create_engine(os.getenv("DATABASE_URL"), echo=True)
Base.metadata.create_all(engine)
