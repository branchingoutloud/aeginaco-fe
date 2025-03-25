# Use the official Node.js 14 image as the base image
FROM node:20.10.0-alpine as development
# Set the working directory to /app
WORKDIR /app
# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
RUN npm install -g npm@10.6.0
# Install the dependencies
RUN npm install --legacy-peer-deps
# Copy the rest of the application code to the container
COPY . .
# Build the Next.js application
# RUN npm run build
# Expose port 8080
EXPOSE 3000
# Start the application
# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
