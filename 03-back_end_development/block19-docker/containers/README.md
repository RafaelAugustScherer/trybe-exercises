# About Containers

Containers are packages that are within a set of rules. They are composed mainly by a slim OS that is made to execute what the user asked.

# Basic Commands

```bash
docker run hello-world #Verify the installation

docker container run ubuntu #Initialize Ubuntu based container
docker container run ubuntu echo 'Tst' #Run "echo 'Tst'" before container is finished
docker container ls -a #List all the containeirs in the current machine
docker container ls -l #Check only the last container created
```

## Field Meanings

- CONTAINER ID: Unique container ID;
- IMAGE: Name of the image (OS) associated;
- COMMAND: Last executed command;
- CREATED: Date of creation;
- STATUS: Current status;
- PORT: Port of communication;
- NAMES: Container nicknames.

## Create Container Commands

```bash
docker container run --name Test alpine
docker container run --rm apline #Remove files after finished
docker container run -d aplpine #Run process in background
docker container create alpine #Create only, do not run
```

## Container Interaction Commands

```bash
docker container start || restart [id || name]
docker container pause || unpause
docker container stop
docker container attach # Remove process from background
docker container rm -f # -f is to stop execution
docker container prune # Remove all unused containers
```

# Run Terminal Inside Container

```bash
# On Create
docker container run -ti ubuntu

#Later
docker exec -it [imgName] bash
```

The command above has the `-t` for terminal and `-i` indicating that we want physical communication with the image. In this case, the keyboard will do.

To exit the terminal simply type: `exit`.

> There should be a **CLI** button in **Docker Desktop Interface** as well for easy connection to the Terminal.
> 

# Network

`docker network ls`:

These are the three network types available to use in Docker **by default**.

- Bridge: Network goes through the host and is able to communicate with the entire internet;
- Host: Communication only with the host;
- None: Nothing!

## Creating a new Network

```bash
# Creating it based on bridge driver
docker network create -d bridge tst-network

# Connecting a container to it
docker network [connect | disconnect] tst-network my-container
```

# Volume Mapping

**Mirror a directory or file** in the Host’s machine into the Container file system. Example:

`docker run -d --name tst-website -p 4401:80 -v "/home/user/website/:/usr/local/apache2/htdocs" httpd:2.4`

The command above will create an Apache based container that will keep a copy of our local directory running at localhost:4401

> [See Dockerfile implementation here.](https://www.notion.so/About-Dockerfile-f8c808b96072445bbf78aaf613195eb1)
> 

# Misc

### Run Apache Server Example

```bash
docker run -d -p [acessPort]:[apachePort (80)] --name apache-server httpd:2.4
# -d = Run in background
# -p = Define ports to acess the apache server
```

Use `docker container —help` for more commands.