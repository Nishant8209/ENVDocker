FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Remove all env files (avoid conflicts)
RUN rm -f .env .env.*

# Use ENV from Render dashboard
ENV ENV_FILE=.env.dev

# Copy selected env file
RUN cp $ENV_FILE .env

# Build app
RUN npm run build

# Expose (just for reference)
EXPOSE 4173

# Start using dynamic port
CMD ["sh", "-c", "npm run preview -- --host --port $PORT"]
