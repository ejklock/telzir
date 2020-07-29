FROM node:alpine as builder

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY app/package*.json ./

RUN npm install
FROM node:alpine

WORKDIR /usr/src/telzir/app

COPY --from=builder node_modules app/node_modules

COPY . .

WORKDIR /usr/src/telzir/app/app

EXPOSE 3333




