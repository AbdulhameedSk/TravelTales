FROM node:20 AS backend
WORKDIR /app/backend
COPY Backend/package*.json ./
RUN npm install
COPY Backend .
EXPOSE 5000

FROM node:20 AS frontend
WORKDIR /app/frontend
COPY Frontend/package*.json ./
RUN npm install
COPY Frontend .
EXPOSE 5173

CMD ["npm", "run", "dev"]
