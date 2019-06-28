# musical-enigma
Node Express app validated using OpenAPI spec

## Solution #1
Using `express-openapi-validator`

### Terminal
```
$ git clone
$ cd musical-enigma
$ nvm use
$ yarn install
$ node app.js
```

## Solution #2
Using `express-openapi-validate`

### Terminal
```
$ git clone
$ cd musical-enigma
$ nvm use
$ yarn install
$ node app-2.js
```

## Test on Postman

`GET` http://localhost:3333/music
`GET` http://localhost:3333/music?genre=rock
`GET` http://localhost:3333/music?genre=rock&artist=me&year=1992
`GET` http://localhost:3333/music?genre=rock&artist=me&year=notanumber
`GET` http://localhost:3333/instrument


## Notes

These two libraries pretty much do the same thing, but with different interfaces. I personally recommend using express-openapi-validate (Solution #2). Though we need to write code to manually add a validator each route defintion (compared to Solution #1), it throw better errors that we can catch in our error middlewares and send back to the client.
