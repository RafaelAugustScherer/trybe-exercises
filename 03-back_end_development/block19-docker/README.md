Docker is a **clever solution** for repeated virtualized machines to run processes that take up a lot of space and require high processing power. Docker does that with an **optimized build** of the OS leaving just the **absolute necessary** for the processes to work.

# Installation

Follow the installation process in the official Docker Website: [https://www.docker.com/get-started](https://www.docker.com/get-started). Don’t forget the pre-requisites!

---

[About Containers](/containers)

[About Images](/images)

[About Dockerfile](/dockerfile))

## Run Apache Server Example

```bash
docker run -d -p [acessPort]:[apachePort (80)] --name apache-server httpd:2.4
# -d = Run in background
# -p = Define ports to acess the apache server
```