sudo docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=password postgres:latest
cd frontend/social-media-app/
pwd
bun run prisma:migrate:auth
bun run prisma:migrate:utopia