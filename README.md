# VariaMos

VariaMos is a modeling tool and a framework, that can be easily extended, and that allows you to define your own models.

**Main Branch**

![Unit Tests](https://github.com/VariaMosORG/VariaMos/workflows/Unit%20Tests/badge.svg?branch=main)

![End-to-end Tests](https://github.com/VariaMosORG/VariaMos/workflows/End-to-end%20Tests/badge.svg?branch=main)

![Publish Docker Images](https://github.com/VariaMosORG/VariaMos/workflows/Publish%20Docker%20Images/badge.svg)

## VariaMos online
You can check the VariaMos application here: [www.variamos.tk](http://variamos.tk/)

## VariaMos documentation
VariaMos documentation can be found here: [wiki](https://github.com/VariaMosORG/VariaMos/wiki/)

# Project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Unit tests
```
npm run test:unit
```

### End-to-End tests
```
npm run cypress:open
```

# Run Variamos container from image: danielgara/variamos in Docker Hub repository

## Install Docker in Linux with Ubuntu/Debian distriution

1. Update the apt package index and install packages to allow apt to use a repository over HTTPS:
```
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```
2. Add Docker’s official GPG key:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88
```
3. Use the following command to set up the stable repository

```
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

4. Update the apt package index, and install the latest version of Docker Engine and containerd

```
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io
```

5. Start Docker service
```
sudo service docker start
```

## Run Variamos container

```
docker run -dp 8080:80 --name variamos danielgara/variamos
```