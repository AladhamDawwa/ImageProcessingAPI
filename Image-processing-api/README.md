# Weather Journal App

**This project is a part of udacity-egfwd advanced fullstack nanodegree.**

## 🧐 About

This is an api that takes an image and resizes it using sharp

## :memo: Instructions

**These instructions will get you a copy of the project up and running on your local machine:**

- click npm i to download all the necessary node_modules needed for this project.
- click node server.js to start the local server on port 3000.
- go to the localhost followed by the port to see the project.

## :warning: Prerequisites

**packages used to run the server successfully.**

- express
- typescript
- sharp
- nodemon
- jasmine
- supertest
- fs-extra
- ejs
- prettier
- es-lint 

## :gear: Running scripts

- start project: npm run start
- Run unit tests: npm run test
- Build to JS: npm run build
- Es-Lint: npm run lint
- Prettier: npm run prettier

## :notes:
- http://localhost:3000/api
just welcome page

- http://localhost:3000/api/images?filename=fjord&width=200&height=200
Will display the image with name fjord resized to have width of 200 and height of 200 
**any wrong input will cause a message to appear to illustrate what went wrong

- Source images are placed at (assets/images/full) folder.
- Resized images thumbs will be stored in (assets/images/thumb) folder.
