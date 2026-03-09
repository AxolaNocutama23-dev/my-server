# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your project files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to start your app
CMD ["npm", "start"]
