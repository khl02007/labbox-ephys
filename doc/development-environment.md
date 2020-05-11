# Labbox-ephys development environment

These instructions will allow you to open labbox-ephys in a development environment.

## Prerequisites

* Linux
* [Visual studio code](https://code.visualstudio.com/) with the [Remote-Containers Extension](https://code.visualstudio.com/docs/remote/containers)
* Docker (be sure that your non-root user is in the docker group)

### Clone the source code

To use open labbox-ephys in a development environment, you should clone the source code of labbox-ephys, hither, and kachery:

```bash
# Adjust this source path as needed
cd /home/user/src
git clone https://github.com/laboratorybox/labbox-ephys labbox-ephys
git clone https://github.com/flatironinstitute/kachery kachery
git clone https://github.com/flatironinstitute/hither hither
```

and be sure that the following environment variables are set
```bash
# Adjust the source path to match above
export HITHER_SOURCE_DIR=/home/user/src/hither
export KACHERY_SOURCE_DIR=/home/user/src/kachery
```

Also, make sure that the `KACHERY_STORAGE_DIR` environment variable is set as described in the main installation instructions.

### Open labbox-ephys in the development container

```bash
# Change to the labbox-ephys source directory and launch vscode
cd labbox-ephys
code .
```

Run the vscode command: `Remote-Containers: Reopen in Container`

See [this guide](https://github.com/flatironinstitute/learn-sciware-dev/blob/master/07_RemoteWork/vscode/remote_containers.md) for more information on using devcontainers.

### Ports

**In development container**

The following ports are used by the development container:

* 15301 - development client (yarn start)
* 15302 - development api server (flask `api/`)
* 15303 - test production client (serving `build/` directory)
* 15304 - test production api server (gunicorn flask `api/`)
* 15305 - test production nginx server

**In deployed production container**

The following ports are used inside the deployed production container:

* 15306 - client (serving `build/` directory)
* 15307 - server (gunicorn flask `api/`)
* 8080 - nginx server

### Deploying docker image

See [../docker/labbox-ephys](../docker/labbox-ephys)