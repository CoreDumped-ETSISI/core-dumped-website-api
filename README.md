# Core Dumped Website API

API to interface with a Mongo database that stores all the events, projects and people needed for the Core Dumped Website.

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Authors and Contributors](#authors-and-contributors)
- [Code of Conduct](#code-of-conduct)
- [Changelog](#changelog)

## About

This API connects to a Mongo database and provides access to its data to the [Core Dumped Website](https://github.com/CoreDumped-ETSISI/core-dumped-website).
It needs to handle GET requests on the Projects, Event and People, accesible to anyone.
It needs to allow POST and PUT requests for Projects and Event, only for logged administrators using [JSON Web Tokens](https://jwt.io/).
It needs to allow PUT requests for People, only for logged administrators using [JSON Web Tokens](https://jwt.io/).

## Installation

Install nodejs 20.5.1 [here](https://nodejs.org/en)

Clone this repository and run

```bash
npm install
```

## Usage

To run on dev mode locally

```bash
npx nodemon
```
The API will be hosted in port 3000 if no other port is specified.

### How to Dockerize

First, create a new `.env` inside `/app`, following the example in `.env.example`.

Then run, replacing `imageName` and `port`
```bash
docker build -t <imageName> .
docker run -p <port>:3000 <imageName>
```

## Contributing

We welcome contributions from the community! If you want to contribute to Core Dumped Website API, please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

Core Dumped Website API is released under the [Apache 2.0](LICENSE). [Include a brief summary of the license terms and a link to the full license file.]

## Authors and Contributors

Check out the [AUTHORS.md](AUTHORS.md) file to see a list of all the wonderful people who have contributed to this project.

## Code of Conduct

We expect all contributors to follow our [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a respectful and inclusive environment for everyone.

## Changelog

For a detailed list of changes and versions, check the [CHANGELOG.md](CHANGELOG.md) file.
