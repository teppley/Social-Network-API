[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Social Network API

## Description


## Demo Video

https://drive.google.com/file/d/1PGOO8R0BZoeAl5XEFQe4H7PEohdWGoQX/view

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

To install, the code can be copied or the repository can be forked on GitHub.
First install the necessary packages using `npm install` from the terminal. 
Then the server can be started using `node server.js` from the terminal.
The routes can now be utilized using Postman or Insomnia.

## Usage

Users will need to use Postman or Insomnia to utilize the API.

## User and Friend Routes:

View all users - `Get - /api/users`

View user by ID - `Get - /api/users/:userId`

Create a new user - `Post - /api/users` (add text JSON) {"username" : " ", "email" : " "}

Update a user by ID - `Put - /api/users/:userId` (add text JSON) 
{"username" : " ", "email" : " "}

Delete a user by ID - `Del - /api/users/:userId`

Add a friend by ID - `Post - /:userId/friends/:friendId`

Delete a friend by ID - `Del - /:userId/friends/:friendId`


## Thought and Reaction Routes:

View all thoughts - `Get - /api/thoughts`

View thought by ID - `Get - /api/thoughts/thoughtId`

Create a thought - `Post - /api/thoughts` (add text JSON)
{"thoughtText" : " ", "username" : " ", "userId" : " "}

Update a thought by ID - `Put - /api/thoughts/thoughtId` (add text JSON)
{"thoughtText" : " "}

Delete a thought by ID - `Del - /api/thoughts/thoughtId`

Create a reaction - `Post - /:thoughtId/reactions` (add text JSON)
{"reactionBody" : " ", "username" : " ", "userId" : " "}

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Questions

For questions about this project, please contact [teppley](https://github.com/teppley) at teppley300@gmail.com.