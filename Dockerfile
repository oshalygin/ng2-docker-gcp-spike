FROM node:7.0.0

MAINTAINER Oleg Shalygin <oshalygin@gmail.com>

ARG version

LABEL version=$version
LABEL description="Angular 2 Application running in GCP under Flex"

ENV PORT=4200

COPY . /wwwroot
WORKDIR /wwwroot
EXPOSE $PORT

RUN npm install angular-cli -g
RUN npm install

ENTRYPOINT  ["npm", "start"]
