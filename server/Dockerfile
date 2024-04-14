FROM node:18

WORKDIR /app

COPY ./package.json ./

ARG NODE_ENV
RUN if [ "$NODE_ENV" == "development" ]; \
          then yarn; \
          else yarn install --only=production; \
          fi

COPY . .

ENV PORT 3001
EXPOSE $PORT
