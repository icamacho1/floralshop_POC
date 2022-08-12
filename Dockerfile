FROM node:16-alpine
WORKDIR /var/www
ADD package.json .
RUN npm install
ADD . .
RUN chown -R node:node /var/www 
USER node