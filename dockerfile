FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY . .
EXPOSE 80 8081
RUN nginx
