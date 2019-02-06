# Undabot Server App (Node.js, Express)

This is a recruitment test solution for Undabot job position Frontend developer created with Node.js and Express web application framework.

## Project setup
To install project dependencies run:
```
npm install
```

### Running local server
To start the server on `http://localhost:3000` run:
```
npm start
```

## Task 4 - New endpoint

Server was created using Node.js and Express.

Single POST endpoint (`API/contact`) was added as required in the spec. The only thing the endpoint does is validation of contact data received on the endpoint.

Validation errors are returned in an array which includes invalid field name, validation error code and validation message.
