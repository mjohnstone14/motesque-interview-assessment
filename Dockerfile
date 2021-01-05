FROM node:10.23-buster
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN yarn