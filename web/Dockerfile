FROM node:18 AS builder

WORKDIR /app

COPY ./package.json .

RUN yarn install --only=production

ARG SERVER_URL
ENV VITE_SERVER_URL=${SERVER_URL}

COPY . .

RUN yarn build

# NGINX
FROM nginx:stable-alpine

ARG NGINXFILE
COPY ./${NGINXFILE} /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 443