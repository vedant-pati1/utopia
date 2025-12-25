source ./backend/venv/bin/activate
sudo docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=password postgres:latest