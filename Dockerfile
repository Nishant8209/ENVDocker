FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Remove env conflicts
RUN rm -f .env .env.*

# Accept env file at build time
ARG ENV_FILE

# Copy selected env file
COPY ${ENV_FILE} .env

# Build the app (IMPORTANT)
RUN npm run build

# Expose port (reference only)
EXPOSE 4173

# Run production server (Vite preview)
CMD ["sh", "-c", "npm run preview -- --host --port $PORT"]
