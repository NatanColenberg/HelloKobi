# Basing our Image ontop of node version 10
FROM node:10

# Set the Working Directory to the Node main directory
WORKDIR /usr/srv/app

# Copy the app dependencies and installing them
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install

# Copy all the app files to the Node working directory in the container
COPY ./dist .

# Exposes a communication port for the container
EXPOSE 8080

# 
CMD ["node", "server.js"]