FROM node:10-alpine as build
RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock /app
RUN yarn install --pure-lockfile
COPY . /app
RUN yarn build
 
FROM nginx:1.17.1-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
