FROM nikolaik/python-nodejs:latest

#creates /app directory in our base image
WORKDIR /app

# copies package.json & package-lock.json to the /app directory
COPY package*.json ./

# install node dependencies from the package.json
RUN npm install

# copy the rest of our src files to the /app directory
COPY . .

#exposes the internal port of 3000
EXPOSE 3000

#run node api
CMD ["node", "index"]