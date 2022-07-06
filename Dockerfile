####################################
# LOCAL DEVELOPMENT BUILD
####################################
FROM node:16.14.2-alpine as development
WORKDIR /v1/api
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
USER node
####################################
# PRODUCTION BUILD
####################################
FROM node:16.14.2-alpine as build
WORKDIR /v1/api
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /v1/api/node_modules ./node_modules
COPY --chown=node:node . .
RUN npm run build
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force
USER node
####################################
# PRODUCTION
####################################
FROM node:16.14.2-alpine as production
COPY --chown=node:node --from=build /v1/api/node_modules ./node_modules
COPY --chown=node:node --from=build /v1/api/dist ./dist
CMD [ "node", "dist/main.js" ]
