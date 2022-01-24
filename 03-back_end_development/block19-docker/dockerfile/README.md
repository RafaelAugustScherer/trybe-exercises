# About Dockerfile

Dockerfile act as a script to create a Docker Image.

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
RUN npm build # Run executes a command before the image is started

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

## Volume Mapping

```bash
VOLUME ["/home/user/website/:/usr/local/apache2/htdocs"]
```

### Extra Commands

```bash
ENTRYPOINT["npm", "start"] # Will be executed whenever the container is started
CMD["npm", "start"] # Will be executed whenever the container is started, but the user can decide if it is going to be executed or not
```

## Running container from Dockerfile

```bash
docker build -t react-example .
docker container run -dit -p 3000:80 react-example
# Now just acess localhost:3000 and the React App should be running
```