# Use a Node.js base image for backend
FROM node:20 AS backend

# Set the working directory for backend
WORKDIR /app/backend

# Copy package.json and package-lock.json for the backend
COPY Backend/. .

# Install dependencies for the backend
RUN npm install

# Copy the rest of the backend code
COPY Backend .

# Expose port 8080 for backend
EXPOSE 8080


# Use a Node.js base image for frontend
FROM node:20 AS frontend

# Set the working directory for frontend
WORKDIR /app/frontend

# Copy package.json and package-lock.json for the frontend
COPY Frontend/. .

# Install dependencies for the frontend
RUN npm install

# Copy the rest of the frontend code
COPY Frontend .

# Expose port 5173 for frontend
EXPOSE 5173


#Command For entire application to run
CMD ["npm", "run", "dev"]
