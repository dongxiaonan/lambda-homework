FROM node:10-alpine

#Create app directory and use ti as wroking dir
ADD . /client
WORKDIR  /client

COPY package.json /client
COPY package-lock.json /client
ENV PATH="/client/node_modules/.bin/:${PATH}"

RUN npm install

EXPOSE 3000
CMD npm start