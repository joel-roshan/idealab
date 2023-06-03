FROM node:19-alpine

# Path: /app
WORKDIR /app

# Path: /app/package.json

COPY package.json .

# Path: /app
RUN npm install

# Path: /app
COPY . .

EXPOSE 3000
 
# Path: /app
CMD ["npm", "start"]

