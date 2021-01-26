# Install Docker in Linux Ubuntu/Debian distribution

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

# Run Variamos container

```
docker run -dp 80:80 --name variamos danielgara/variamos
```