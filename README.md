# Node.js CI/CD Pipeline

This repository contains a Node.js application and a CI/CD pipeline for testing, building, and deploying the application using GitHub Actions, Docker, and Kubernetes.

## CI/CD Pipeline

1. **Test**: On each pull request, the pipeline runs tests automatically.
2. **Build**: If tests pass, a Docker image is built and pushed to DockerHub.
3. **Deploy**: The Docker image is deployed to a Kubernetes cluster, and notifications are sent to Slack regarding deployment success or failure.

## Setup

### Prerequisites

- Docker
- Kubernetes Cluster (with `kubectl` configured)
- GitHub Secrets for DockerHub credentials, Kubernetes config, and Slack Webhook

### Workflow Overview

1. **Test on PR**: The pipeline runs tests on each pull request to the `main` branch.
2. **Build Docker Image**: After tests pass, a Docker image is built.
3. **Deploy to Kubernetes**: The image is deployed to Kubernetes, and the deployment status is sent to Slack.

### Configuration

1. **Docker**: Set your Docker credentials in GitHub Secrets (`DOCKER_USERNAME` and `DOCKER_PASSWORD`).
2. **Kubernetes**: Store your Kubernetes configuration in `KUBECONFIG`.
3. **Slack**: Create a Slack Webhook and store the URL in `SLACK_WEBHOOK_URL`.

## Conclusion

This pipeline automates the process of testing, building, and deploying the Node.js application with notifications to keep you informed.
