# NOTE - Visit https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# for information on Dockerizing Node applications

FROM node:13.10.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# FIXME
EXPOSE 8080

# FIXME
# NOTE - Potential fix is to include src/index.js as the second
# parameter in the CMD command.
# For a potentially good guide, see:
# https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker-quickstart
CMD ["node", "server.js"]