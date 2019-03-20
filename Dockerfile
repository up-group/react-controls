FROM node:11 
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# only production dependencies
RUN npm install

#  Fix auto depencies warnings
RUN npm audit fix

# Bundle app source
COPY . .

EXPOSE 6006

CMD [ "npm", "run", "build-storybook" ]