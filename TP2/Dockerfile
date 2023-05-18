FROM node:18-alpine as build

WORKDIR /app

RUN apk update && \
    apk add git

RUN git clone https://github.com/bastienwirtz/homer .

COPY package*.json ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM alpine:3.16

ENV GID 1000
ENV UID 1000
ENV PORT 8080
ENV SUBFOLDER "/_"
ENV INIT_ASSETS 1

RUN addgroup -S lighttpd -g ${GID} && adduser -D -S -u ${UID} lighttpd lighttpd && \
    apk add -U --no-cache lighttpd

WORKDIR /www

COPY --from=build /app/lighttpd.conf /lighttpd.conf
COPY --from=build /app/entrypoint.sh /entrypoint.sh
COPY --from=build --chown=${UID}:${GID} /app/dist /www/
COPY --from=build --chown=${UID}:${GID} /app/dist/assets /www/default-assets

USER ${UID}:${GID}

EXPOSE 8080
ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]