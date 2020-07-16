FROM node:13-alpine as build
WORKDIR /app
COPY package*.json package-lock.json /app/
RUN npm install -g @aws-amplify/cli
RUN npm install -g @angular/cli
RUN npm install -g @ionic/cli
RUN npm install
COPY ./ /app/
RUN ionic build --prod
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/www/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
