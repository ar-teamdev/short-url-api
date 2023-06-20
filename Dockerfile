FROM node:14.5.0-alpine
ENV TZ=Asia/Bangkok

RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN npm config set unsafe-perm true
RUN npm install --quiet node-gyp -g

RUN apk add tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone \
    && npm install \
    && mkdir -p /app/ssl

RUN apk add git
ARG CONTAINER_PORT
ARG PM2_FILE
ENV PM2_FILE ${PM2_FILE}

WORKDIR /app/

COPY . /app

RUN npm install -g pm2 && npm install express express-winston winston && npm install 

EXPOSE 3000

CMD pm2 start ${PM2_FILE} --no-daemon