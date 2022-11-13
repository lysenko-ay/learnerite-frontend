FROM node:18 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx nuxi generate

FROM node:18 AS prod

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install --global serve

COPY --from=build /usr/src/app/.output/public ./public

CMD ["npx", "serve", "./public"]
