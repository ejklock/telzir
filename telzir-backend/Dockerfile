FROM node:alpine as builder
ENV WAIT_VERSION 2.7.2

RUN apk add --no-cache openssl wget

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY app/package*.json ./

RUN npm install
FROM node:alpine

WORKDIR /usr/src/telzir/app

COPY --from=builder node_modules app/node_modules

COPY . .

ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

WORKDIR /usr/src/telzir/app/app

EXPOSE 3333

CMD ["npm","dev","run"]





