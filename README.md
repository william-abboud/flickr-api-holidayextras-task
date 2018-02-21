# flickr-api-holidayextras-task
This repo contains the solution to the Holiday Extras' Flickr API task: https://github.com/holidayextras/culture/blob/master/recruitment/developer-flickr-task.md

#Important Notes:

Unfortunately due to Cross-Origin issues I could not directly fetch JSON data from the link to the Flickr API provided
so I fetched the data via JSONP.

This repo uses my awesome Webpack configuration which powers all my modern web applications.
You can check out all its rich features at here -> https://github.com/william-abboud/webpack-config.

# Installation:

Assuming you have NodeJS v9.x.x or newer and npm v5.x.x run:

  `$ npm install`

and all dependecies will be installed.

# Usage:

  - To develop:
    `$ npm start`

  - To build for production:
    `$ npm run build`

  - To run tests:
    `$ npm test`

  - To run linter:
    `$ npm run lint`
