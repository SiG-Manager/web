# Dockerfile

FROM node:24

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]

# docker run --env-file .env -p 80:3000 sig-manager-web