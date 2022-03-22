# Block 25 - Deployment

# Summary

“To deploy an application” is a term used in the sense of making your application available to the web. Make it accessible for anyone who accesses the URL on the internet.

## Popular Deployment Services

- **[Heroku](https://heroku.com/);**
- [Google GCE;](https://cloud.google.com/compute)
- [Amazon AWS;](https://aws.amazon.com/)
- [Microsoft Azure;](https://azure.microsoft.com/)
- [IBM Cloud.](https://www.ibm.com/cloud)

# Heroku

The **PaaS** (Platform as Service) we are going to be using for learning purposes is Heroku. There is a lot of features that come as free to any user. That makes it easier for us to test and deploy multiple times.

## Environment setup

1. First step is to install the heroku-cli. Follow the [link with the instructions!](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)
2. Then you’ll want to run: `heroku login` so the CLI can associate your profile with the computer

## Remotes

Under your Node Project folder, you will need to add a new git remote for heroku:

```bash
# /Project_Folder/
heroku create [appName]

git remote -v # List project remotes
# There is going to be a heroku git.heroku.com/[appRandomName]

heroku create [appName-test] # Create an app just for testing purposes
```

### Rename a remote

```bash
git remote rename heroku heroku-development # git remote rename [from] [to]
```
<details>
<summary>Traditional Deploy</summary>

> Everything listed below can also be done in heroku’s web interface!
> 

## Deploy Application

```bash
git push heroku [my-test-branch:]master # git push [heroku-remote] [local-branch]:[remote-branch]
heroku open --app [appName] # Access deployment
```

## Destroy Application

```yaml
heroku destroy --app [appName] --confirm [appName]
```

## Environment Variables

```bash
heroku config:set VAR_NAME="some text" --app [appName] # Create env variable
heroku config --app [appName] # List created variables
```

## Logs

```yaml
heroku logs --app [appName] [-n 100] [--tail]
# -n = last n lines (Default: 100)
# --tail = attach to app prompt
```
</details>

<details>
<summary>Container Deploy (No Git)</summary>

**Example:**

```bash
# ./Dockerfile

FROM node
WORKDIR /app
COPY package.json .

RUN npm i

ENV PORT=80
ENV NODE_ENV=test # Sequelize config/config.js environment 

EXPOSE 80
CMD ["npm", "start"]

```

```bash
heroku container:login
heroku container:push web # Create image and push to heroku's docker repository
heroku container:release web **# Deploy**
```

## GitHub Actions

**Define the pipeline.** An automation process to run every heroku command to deploy a container app.

**Example:**

```yaml
./.github/workflows/cd.yml # **c**ontinuous **d**eployment
name: Deploy

on:
	push:
		branches:
			- master

jobs:
	deploy-test:
		name: Deploy to Heroku on test env
		runs-on: ubuntu-latest
		steps:
			- name: Checkout the code
				uses: actions/checkout@v2

			- name: Deploy heroku containers
			- uses: akhileshns/heroku-deploy@v3.12.12
				with:
					# Secrets can be created in the GitHub Repository's Settings
          heroku_api_key: ${{secrets.HEROKU_API_KEY}} # API Key @ dashboard.heroku.com
          heroku_app_name: ${{secrets.HEROKU_APP_NAME}}
          heroku_email: ${{secrets.HEROKU_EMAIL}}
					usedocker: true
				env:
					NODE_ENV: test
```
</details>

# CI/CD Pipelines

<details>
<summary>Continuous Integration (CI)</summary>

### Summary

The process of integration and deployment of new features made separately by each developer can be very demanding and manual. CI focuses on the automation of these processes, so there is as little as possible of human interaction. **[GH Actions](https://docs.github.com/pt/actions)** can be configured to make a CI with ESLint, Automated Tests (Jest) and others.

### Example of GH Actions pipeline:

```yaml
# .github/workflows/main.yml
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  eslint:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1.4.4

  stylelint:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1.4.4

  evaluator:
    name: Evaluator Job
    runs-on: ubuntu-18.04
    needs: [eslint, stylelint]
    steps:
      - uses: actions/checkout@v2
      - name: Evaluator step
        id: evaluator
```

### ESLint Workflow

**Setup** - First, install and setup ESLint in your application

```bash
npm install eslint -D
npx eslint --init
# Answer the questions in regards to your app
```

```yaml
# ./.github/workflows/main.ytml
on: [push, pull_request]

jobs:
	eslint:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v2
			- uses: actions/setup-node@v1
				with:
					node-version: 14

			- run: npm install
			- run: npx eslint
```
</details>

<details>
<summary>Continuous Delivery / Deployment (CD)</summary>

### Summary

Automated deployments as soon as CI tests have passed. The deploy link can be shared with other team developers so everyone is on track with the changes being made to the application.
</details>

# Automated Back-end Deploy - Heroku

```bash
# ./Dockerfile
FROM node:alpine

WORKDIR /app
COPY package.json .

RUN npm i

CMD ['npm', 'start']

```

```yaml
# ./heroku.yml
build:
	docker:
		web: Dockerfile

# run:
	*# web: node index.js*
```

```bash
heroku stack # List heroku stacks, where the .yml commands will run
# heroku-18, heroku-20 are ubuntu based.
# container is whatever you set at ./Dockerfile, in this case node:alpine

heroku stack:set container # Change stack to container

git add .
git commit -m 'Deploy settings'
git push heroku master # Will be deployed as a container

```

# Automated React Deploy - Heroku

```bash
heroku create react-app --buildpack mars/create-react-app

git add .
git commit -m 'Deploy settings'
git push heroku master # Will be deployed as a container
```

## As a Container - NGINX

```bash
**# Dockerfile**

# Create Production build in node container
FROM node:alpine AS build
WORKDIR /app
COPY . .
ENV REACT_APP_SERVER=https://tryberank-api.herokuapp.com
RUN ["npm", "i"]
RUN ["npm", "run", "build"]

# Copy build to nginx container & nginx configs
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./deploy/default.conf.template /etc/nginx/conf.d/default.conf.template
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

**# ./deploy/default.conf.template**
server {
    listen       $PORT;
    listen  [::]:$PORT;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
}
```