FROM node:12.18-slim

#creates /app directory in our base image
WORKDIR /app

# copies our package.json file to the new /app directory
COPY package.json /app

# install node dependencies from the package.json
RUN npm install

# copy the rest of our src files to the /app directory
COPY . /app

#run node api
CMD ["npm", "start"]