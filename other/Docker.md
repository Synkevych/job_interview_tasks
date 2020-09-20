# Docker

Программное обеспечение для автоматизации развёртывания и управления приложениями в средах с поддержкой контейнеризации.

## Why use Docker

Docker makes it really easy to install and run software without worrying about setup or dependencies.  
Docker is a platform or ecosystem around creating and running containers.

## What is Docker?

Docker Ecosystem:

- Docker Client(Docker CLI) - to issue commands to
- Docker Server (Docker Deamon)- creating images, running containers, ets.
- Docker Machine
- Docker Images
- Docker Hub - free public images that you can download and run
- Docker Compose

__Image__ - single file with all the deps and config required to run a program. (File system Snapshot)
__Container__ - instance of an Image, runs a program. 

Namespacing - Isolating resources per process (or group of processes)
Control Groups - Limit amount of resources used per process(Specific to Linux)
