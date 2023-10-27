# Core Dumped Website API

API to interface with a Mongo database that stores all the events, projects and people needed for the Core Dumped Website.

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Routes](#routes)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Authors and Contributors](#authors-and-contributors)
- [Code of Conduct](#code-of-conduct)
- [Changelog](#changelog)

## About

This API connects to a Mongo database and provides access to its data to the [Core Dumped Website](https://github.com/CoreDumped-ETSISI/core-dumped-website).
It needs to handle GET requests on the Projects, Event and People, accesible to anyone.
It needs to allow POST and PATCH requests for Projects and Event, only for logged administrators using [JSON Web Tokens](https://jwt.io/).
It needs to allow PATCH requests for People, only for logged administrators using [JSON Web Tokens](https://jwt.io/).

## Installation

Install nodejs 20.5.1 [here](https://nodejs.org/en)

Clone this repository and run

```bash
npm install
```
## Routes

The routes of this API are:
- `\cartas` GET returns an array of all projects and events sorted by date
- `\cartas` POST creates a new project or event
- `\cartas\[:id]` GET returns a single project or event with the corresponding ID
- `\cartas\[:id]` DELETE deletes a single project or event with the corresponding ID
- `\cartas\[:id]` PATCH updates a single project or event with the corresponding ID
- `\eventos\` GET returns an array of all events sorted by date
- `\eventos\categorias` GET returns an array of all event categories
- `\proyectos\` GET returns an array of all projects sorted by date
- `\proyectos\categorias` GET returns an array of all project categories
- `\personas` GET returns an array of all stored people
- `\personas\:id` GET returns a single person with the corresponding ID
- `\personas\:id` PATCH updates a single person with the corresponding ID
- `\admin` POST returns a valid for 2h JWT if the password is correct. Apply the password to the header `Authorization: Bearer <JWT>` 

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

Core Dumped Website API is released under the [Apache 2.0](LICENSE).

## Authors and Contributors

Check out the [AUTHORS.md](AUTHORS.md) file to see a list of all the wonderful people who have contributed to this project.

## Code of Conduct

We expect all contributors to follow our [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a respectful and inclusive environment for everyone.

## Changelog

For a detailed list of changes and versions, check the [CHANGELOG.md](CHANGELOG.md) file.
