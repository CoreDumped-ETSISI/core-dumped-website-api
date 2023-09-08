FROM node:20

WORKDIR /app

COPY ./app .

RUN npm ci --omit dev

EXPOSE 3000

CMD [ "node", "src/server.js" ]