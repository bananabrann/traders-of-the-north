FROM node:13.10.1

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install \
    && npm install -g serve \
    && npm run-script build

EXPOSE 5000

CMD ["serve", "build"]