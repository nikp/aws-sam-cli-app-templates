# Cookiecutter TypeScript NodeJS EventBridge Quick Start Application

A cookiecutter template to create a NodeJS EventBridge Quick Start Application using [Serverless Application Model (SAM)](https://github.com/awslabs/serverless-application-model) and TypeScript.

## Requirements

* [AWS SAM CLI](https://github.com/awslabs/aws-sam-cli)

## Usage

Generate a boilerplate template in your current project directory using the following syntax:

* **NodeJS 10**: `sam init --runtime nodejs10.x --application-template quick-start-eventbridge --name eb-app`

> **NOTE**: ``--name`` allows you to specify a different project folder name

Compile the Typescript code to NodeJS to match the Lambda runtime
* `npm install`
* `tsc`

Use the suite of SAM CLI commands to build the Lambda function, package it, and deploy it (see [SAM CLI Documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-command-reference.html0) for more)

# Credits

* This project has been generated with [Cookiecutter](https://github.com/audreyr/cookiecutter)

