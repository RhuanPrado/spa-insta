FROM node:18.16.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY .env.local ./

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
