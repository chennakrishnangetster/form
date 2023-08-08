FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY . .
EXPOSE 80 
RUN nginx


