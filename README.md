# passbird

Free, open-source client or server-side APIs to _lint_ user input.
Right now, you can check type for an email address i.e., either of `disposable`, `free` or `business` and determine
strength for a given password on a scale of `1` to `5`.

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vaibhavpandeyvpz/passbird/Node.js%20CI)
![Codecov](https://img.shields.io/codecov/c/github/vaibhavpandeyvpz/passbird)
![Codacy grade](https://img.shields.io/codacy/grade/2b0925f643db4e5ea9d2436e46f11f08)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/vaibhavpandeyvpz/passbird)

## Installation

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your workstation.
Clone or download the repository and run below commands in project folder:

```shell
# install dependencies
yarn install

# start the local server
yarn start:dev
```

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Usage

The two endpoints included are as follows.
You can also refer to the included [Postman](https://www.postman.com/) collection [here](Passbird.postman_collection.json) for examples.

| Method | Path        | Description               |
|--------|-------------|---------------------------|
| `GET`  | `/`         | Lists supported endpoints |
| `POST` | `/email`    | Checks for email type     |
| `POST` | `/password` | Checks password strength  |

The [Heroku](https://www.heroku.com/) powered, free-to-use base URL is [https://passbird.herokuapp.com](https://passbird.herokuapp.com).
Sample requests using [curl](https://curl.se/) would look like below:

```shell
curl -X POST -d "email=contact@vaibhavpandey.com" https://passbird.herokuapp.com/email

curl -X POST -d "password=Testing123" https://passbird.herokuapp.com/password
```

## License

See [LICENSE](LICENSE) file.
