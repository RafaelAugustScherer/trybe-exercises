# About Compose (YAML)

Compose will act as a **schedule** to be executed. What images do I need to prepare, which containers do I need to run. The whole enviroment can be prepared with one `.yaml`

# Basic Structure

```bash
# docker-compose.yaml
version: [composeVersion]
services: # Containers Definitions
<MY-CONTAINER-1>:
    image: <MY-IMAGE:VERSION>
    # ... other settings
<MY-CONTAINER-2>:
    image: <MY-IMAGE:VERSION>
    # ... other settings
...
```

## Version

A version is specified to prevent bugs that might happen when a new version is released. More info about that [here](https://docs.docker.com/compose/compose-file/compose-versioning/).

## Services

Define containers and its properties. Example:

```bash
version: "3.8"
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - "backend"
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - "database"
  database:
	  build: ./database
    restart: always
```

- image
    
    The image to run in the container.
    
- build
    
    Instead of an image, you can specify the build pointing to a Dockerfile
    
- restart
    
    `no` - Default Value, won’t restart
    
    `on-failure` - Restart only on failure
    
    `unless-stopped` - Unless stop has been executed
    
    `always` - Off? Restart.
    
- ports
    
    Which external / internal ports to link
    
- environment
    
    Define PATH variables for the container’s enviroment.
    
- depends_on
    
    Which container needs to be running for this container to work as well.
    

### Volume

```bash
version: "3.8"
services:
  web:
    image: nginx:alpine
    volumes:
			- ./htmlpublic:/usr/share/nginx/html
			- # Other Volume
		ports:
			- 8080:80
```

### Network

**The network is created automatically for each service!! It works as a bridge network and is isolated from other containers.**

If you want to specify it though:

```bash
networks:
	- [networkName]
```

## Run Services

```bash
docker-compose up -d # Run all services
								 ... [serviceName] # Run a specific service (Will run the dependencies as well)
								 ... --build [serviceName] # When a build is specified instead of an image
```

## Misc Services

- Kill service related things but the containers: `docker-compose down`
- List Services: `docker-compose ps`
- Stop Services: `docker-compose stop [serviceName]`
- Start Services: `docker-compose start`