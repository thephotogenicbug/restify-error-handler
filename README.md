# RESTIFY ERROR HANDLER

A Node.js module to handle REST API errors consistently and effectively.

## Features

- Custom error classes for different HTTP status codes
- Middleware to handle errors and format responses consistently
- Compatible with both CommonJS and ES Modules

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 20.15 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install restify-error-handler
```
# Usage

## CommonJS

```bash


const express = require('express');
const { BadRequestError, NotFoundError, InternalServerError, RestifyErrorHandler } = require('restify-error-handler');

const app = express();

app.get('/bad-request', (req, res, next) => {
  next(new BadRequestError('This is a bad request'));
});

app.get('/not-found', (req, res, next) => {
  next(new NotFoundError('Resource not found'));
});

app.get('/internal-error', (req, res, next) => {
  next(new InternalServerError('Internal server error'));
});

app.use(RestifyErrorHandler);

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

```

## ES Modules
```bash


import express from 'express';
import { BadRequestError, NotFoundError, InternalServerError, RestifyErrorHandler } from 'restify-error-handler';

const app = express();

app.get('/bad-request', (req, res, next) => {
  next(new BadRequestError('This is a bad request'));
});

app.get('/not-found', (req, res, next) => {
  next(new NotFoundError('Resource not found'));
});

app.get('/internal-error', (req, res, next) => {
  next(new InternalServerError('Internal server error'));
});

app.use(RestifyErrorHandler);

app.listen(4000, () => {
  console.log('Server running on port 4000');
});


```
[MIT](LICENSE)