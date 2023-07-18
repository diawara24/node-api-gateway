FROM node:16

RUN mkdir -p /auth

WORKDIR /auth

COPY package*.json /auth

RUN npm install

COPY . /auth

#EXPOSE 8080

CMD [ "npm", "run", "start" ]