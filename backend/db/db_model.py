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
    create_engine,
)
from sqlalchemy.orm import declarative_base, DeclarativeBase, relationship

Base: DeclarativeBase = declarative_base()


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=True)
    username = Column(String(50), nullable=False, unique=True)
    auth_user_id = Column(String(50), nullable=False, unique=True)
    email = Column(String(100), nullable=False, unique=True)
    image = Column(URL(), nullable=True)

    posts = relationship("Post",
                         primaryjoin="User.id == Post.user_id"
                         )

followers = relationship(
    "User",
    secondary="followAssociation",
    primaryjoin="User.id == FollowAssociation.user_id",
    secondaryjoin="User.id == FollowAssociation.follower_id",
    back_populates="following",
)

class FollowAssociation(Base):
    __tablename__ = "followAssociation"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    #follower follows user
    follower_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    followed_at = Column(TIMESTAMP, server_default=func.now())

class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False) # one to one relationship with user 
    content = Column(String(500), nullable=False)
    image = Column(BLOB, nullable=True)
    created_at = Column(String(50), nullable=False)

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
