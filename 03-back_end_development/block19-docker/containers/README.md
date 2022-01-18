# About Containers

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
docker container run -ti ubuntu
```

The command above has the `-t` for terminal and `-i` indicating that we want physical communication with the image. In this case, the keyboard will do.

To exit the terminal simply type: `exit`.

# Misc

Use `docker container —help` for more commands.