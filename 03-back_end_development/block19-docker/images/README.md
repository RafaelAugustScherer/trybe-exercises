# About Images

Images act as a **set of volumes** that will compose the main part of a container. Each of these volumes are identified by an unique hash that can be reused by different images.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64c4c9fe-f1b2-444f-8e76-10eb731712e0/Untitled.png)

# Basic Commands

```bash
docker images # List all
docker pull [imgName]:[imgTag] #Download image
docker rmi -f [imgName | imgHash] #Remove image locally | Containers already created from the image will be fine

```