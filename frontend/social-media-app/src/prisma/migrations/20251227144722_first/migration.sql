-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "utopia";

-- CreateTable
CREATE TABLE "utopia"."users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "username" VARCHAR(50),
    "auth_user_id" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "utopia"."follow_association" (
    "user_id" INTEGER NOT NULL,
    "follower_id" INTEGER NOT NULL,
    "followedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "follow_association_pkey" PRIMARY KEY ("user_id","follower_id")
);

-- CreateTable
CREATE TABLE "utopia"."posts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "content" VARCHAR(500) NOT NULL,
    "image" BYTEA,
    "created_at" VARCHAR(50) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "utopia"."messages" (
    "message_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("message_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "utopia"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_auth_user_id_key" ON "utopia"."users"("auth_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "utopia"."users"("email");

-- AddForeignKey
ALTER TABLE "utopia"."follow_association" ADD CONSTRAINT "follow_association_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "utopia"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "utopia"."follow_association" ADD CONSTRAINT "follow_association_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "utopia"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
