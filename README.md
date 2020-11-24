# fareye
**fareye** is a TensorFlow-based experimental web app that adjusts text size based on user position.

## Demo

A demo is available at https://gmlunesa.com/fareye-static
- Please make sure your 2 eyes are visible.
- Please allow camera permissions for browser.

## Frameworks
- Tensorflow.js
  - Tensorflow.js is an open source Javascript library for numerical computation and large-scale machine learning.
- ml5.js 
  - ml5.js is a Javascript wrapper built on top of Tensorflow, that makes development easier.
- p5.js 
  - p5.js is a JavaScript library that provides video and canvas tools.

## Features and Usage
### Real time distance approximation

The calculations of the distance between the camera and the subject is executed real time. Hence, the size of the text on the web app automatically adjusts, without any additional keyboard strokes or mouseclicks.

Check the [deployed website](https://gmlunesa.com/fareye-static) to try it.

## Development
Clone the repository

```
$ git clone https://github.com/gmlunesa/fareye.git
```

Change the directory to the cloned repo folder and install npm dependencies

```
$ npm install
```

Run command to start the server

```
$ node index.js
```
Open the browser and go to the following address:

```
localhost:8000
```

## Inquiries

For any questions or clarifications, please see my contact details at [https://gmlunesa.com/contact](https://gmlunesa.com/contact).

For issues, please file them [here](https://github.com/gmlunesa/fareye/issues/new).

![Node](https://img.shields.io/badge/nodejs-v8.0+-green.svg)
