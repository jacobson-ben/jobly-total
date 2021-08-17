# Jobly

A mock job searching platform
http://joelburton-jobly.surge.sh/

## Tech Stack
React v17.2 / Node.js / Bootstrap / JWT Authentication / JSON Schema 

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm install 

# seed and import database
createdb jobly
psql jobly < jobly.sql

# start server
npm start
```

## Features
- User registration utilizing UserContext and localeStorage token authentication.
- Filtering through companies and the jobs they offer based on form input state.
- Modern use of React hooks such as useState, useContext, useEffect, and some occasional prop drilling when called for. 
- Private accounts and custom 404 page. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
