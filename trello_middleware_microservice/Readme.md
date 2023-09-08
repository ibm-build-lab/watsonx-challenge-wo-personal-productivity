# Trello Integration for Watson Orchestrate

This repo contains a microservice for interfacing between Watson Orchestrate and Trello API functions
that are unsupported out of the box. 

## Important Files
- app.js: Routes requests for the `/trello` path over to `routes/trello_handler.js`
- trello_handler.js: Implements the API request mappings between trello and orchestrate
- Dockerfile: The file used to build the container image
- openapi.yaml: Definition file for Watson Orchestrate. Be sure to change the endpoint if you decide to deploy

## Prerequisites

- Node v16
- Docker or Podman (If you want to run as a container)

## Running the application


1. Build the application with:

    ```sh
    npm install
    ```

1. Create an environment variable for the Trello apikey

    ```sh
    export API_KEY=xxxxxxxxxxxxxxxx
    ```

1. Run the application 

    ```sh
    npm start
    ```

## Builing the container
If you want to containerize the application, you can use Podman or Docker to create the container image using the included Dockerfile.

You will need to replace all values in `<>` with their respective values.

1. To build

    ```sh
    docker build -t <image registry>/<organization/<image name>:<your image tag here> .
    ```

1. To push to your registry

    ```sh
    docker push <image registry>/<organization/<image name>:<your image tag here>
    ```

1. If you want to run from the container locally you can do the following, replacing the `API_KEY` value with the credentials from your own instance:

    ```sh
    docker run -p 3000:3000 -e API_KEY=xxxxxxxx <image registry>/<organization/<image name>:<your image tag here>
    ```

## Deploying the application

There are many ways to deploy the application whether you use a PaaS, a container platform like OpenShift or Kubernetes, or any other container hosting solution. 

For my demo, I used [IBM Code Engine](https://cloud.ibm.com/docs/codeengine?topic=codeengine-getting-started) which allows you to run a container workload without needing to manage the container orchestration platform underneath as it was the easiest for me to implement.

Once you have an endpoint, modify the `openapi.yaml` spec file with your endpoint and upload to Orchestrate