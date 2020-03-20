# NOTE - Visit https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# for information on Dockerizing Node applications

FROM node:13.10.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# FIXME
EXPOSE 8080

CMD ["node", "server.js"]