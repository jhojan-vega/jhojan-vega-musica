FROM node:22-alpine AS build
WORKDIR /workspace
COPY package.json ./
COPY services/api/package.json services/api/package.json
RUN npm install --workspace=@jhojan/api
COPY services/api services/api
RUN npm run build --workspace=@jhojan/api
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /workspace/services/api/package.json ./package.json
COPY --from=build /workspace/node_modules ./node_modules
COPY --from=build /workspace/services/api/dist ./dist
EXPOSE 3000
CMD ["node", "dist/server.js"]
