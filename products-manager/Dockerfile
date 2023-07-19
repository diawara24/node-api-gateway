FROM node:16

RUN mkdir -p /products

WORKDIR /products

COPY package*.json /products

RUN npm install

COPY . /products

CMD [ "npm", "run", "dev" ]