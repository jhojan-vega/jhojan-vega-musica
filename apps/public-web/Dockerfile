FROM node:22-alpine AS build
WORKDIR /workspace
COPY package.json ./
COPY apps/public-web/package.json apps/public-web/package.json
RUN npm install --workspace=@jhojan/public-web
COPY apps/public-web apps/public-web
RUN npm run build --workspace=@jhojan/public-web
FROM nginx:1.27-alpine
COPY --from=build /workspace/apps/public-web/dist /usr/share/nginx/html
