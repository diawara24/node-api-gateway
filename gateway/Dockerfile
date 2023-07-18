FROM node:16

RUN mkdir -p /gateway

WORKDIR /gateway

COPY package*.json /gateway

RUN npm install

COPY . /gateway

EXPOSE 3000

CMD [ "npm", "run", "start" ]