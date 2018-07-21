FROM node:8

#Create app dicrectory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install babel -g

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "serve" ]