FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Inject env variables
ARG VITE_AUTH_URL
ARG VITE_APP

ENV VITE_AUTH_URL=$VITE_AUTH_URL
ENV VITE_APP=$VITE_APP

RUN npm run build

EXPOSE 4173

CMD ["sh", "-c", "npm run preview -- --host --port $PORT"]
