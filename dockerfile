FROM node:10.13.0
COPY . /resume
WORKDIR /resume
RUN yarn install
EXPOSE 3200
