# pull official base image
FROM node:16.13.1-alpine3.12 

LABEL version="1.0"
LABEL description="This is the base docker image for the ResearchLab React app."
LABEL maintainer = ["crihstianmol@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]