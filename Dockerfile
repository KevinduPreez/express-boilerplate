# Use the official Node.js image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose the app port
EXPOSE 3000

# Default command (can be overridden by docker-compose)
CMD [ "node", "index.js" ]

# FROM node:20

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# WORKDIR /home/node/app

# COPY package*.json ./

# RUN npm install

# USER node

# COPY --chown=node:node . .

# EXPOSE 3000

# #RUN npm run mig-init

# CMD [ "node", "app.js" ]