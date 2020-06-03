FROM node:8.7.0-alpine

#Create app directory and use ti as wroking dir
ADD . /serverB/app
WORKDIR  /serverB/app

RUN npm install

COPY . /serverB/app

EXPOSE 9000

CMD node index.js