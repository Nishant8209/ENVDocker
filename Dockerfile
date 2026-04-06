FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# ❗ Remove all existing env files to avoid Vite conflicts
RUN rm -f .env .env.* 

# Accept env file as argument
ARG ENV_FILE

# Copy selected env file as .env
COPY ${ENV_FILE} .env

# Expose Vite dev port
EXPOSE 5173

# Run Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]