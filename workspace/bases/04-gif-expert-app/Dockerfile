FROM node:18.18.2-alpine3.18

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

EXPOSE 5173

CMD ["yarn", "dev", "--host"]