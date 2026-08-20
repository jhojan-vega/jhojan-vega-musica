FROM node:22-alpine AS build
WORKDIR /workspace
COPY package.json ./
COPY apps/admin-web/package.json apps/admin-web/package.json
RUN npm install --workspace=@jhojan/admin-web
COPY apps/admin-web apps/admin-web
RUN npm run build --workspace=@jhojan/admin-web
FROM nginx:1.27-alpine
COPY --from=build /workspace/apps/admin-web/dist /usr/share/nginx/html
