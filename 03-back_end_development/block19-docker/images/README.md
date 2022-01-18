# About Images

Images are one or more **layers of files and dependencies** that act as a **script** to create the whole filesystem of the Container. These layers contain **unique hashes** that can be **reused** between images.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64c4c9fe-f1b2-444f-8e76-10eb731712e0/Untitled.png)

# Basic Commands

```bash
docker images # List all
docker pull [imgName]:[imgTag] #Download image
docker rmi -f [imgName | imgHash] #Remove image locally | Containers already created from the image will be fine

```