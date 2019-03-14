# EPIC MAIL
##EPICmail helps people to exchange information or message with effective and effecient security.




## GETTING STARTED 

### Clone The Project

```
$ git clone https://github.com/donatnshimiyimana/EpicMail-server.git
```

### Install Required Dependencies

```
$ npm install
```

### Start The Server

```
$ npm start
```

### Run Tests

```
$ npm test
```

## API ENDPOINT ROUTES

| METHOD   | ROUTE                | DESCRIPTION                |
|----------|----------------------|----------------------------|
|  POST    | api/v1/auth/signup   | User Registration          |
|  POST    | api/v1/auth/login    | User Login                 |
|  POST    | api/v1/messages      | Send Email                 |
|  GET     | api/v1/messages      | Retrieve Received Emails   |
|  GET     | api/v1/messages      | Retrieve A Specific Email  |
|  DELETE  | api/v1/messages      | Delete A Specific Email    |
|  GET     | api/v1/messages/sent | Retrieve Sent Emails       |
|  GET     | api/v1/messages/sent | Retrieve Read Emails       |