# About Dockerfile

Dockerfile is THE script to create a customized Docker Container.

# Creating a Dockerfile - React App

```bash
FROM node:14-alpine AS build # Define image and nickname
WORKDIR /app # Define the dir to execute commands inside the container
**# Do not forget to create .dockerignore for /node_modules before the COPY**
COPY . . # Copy local files to container directory
RUN npm install #Run command in container's bash

```

## Implementing NGINX - HTTP Connection

```bash
RUN npm build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html # Copy npm build files from Node to NGINX container
EXPOSE 80
```

## Running container from Dockerfile

```bash
docker build -t react-example .
docker container run -dit -p 3000:80 react-example
# Now just acess localhost:3000 and the React App should be running
```