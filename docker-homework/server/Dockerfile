FROM node:8.7.0-alpine

#Create app directory and use ti as wroking dir
ADD . /server/app
WORKDIR  /server/app

RUN npm install

COPY . /server/app

EXPOSE 8081

CMD node index.js