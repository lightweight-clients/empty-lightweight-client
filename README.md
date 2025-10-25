# {{FULL_PROJECT_NAME}}

[![NPM Version](https://img.shields.io/npm/v/{{NPM_PROJECT_NAME}})](https://www.npmjs.com/package/{{NPM_FULL_PROJECT_NAME}})
[![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2F{{GITHUB_ORG}}%2F{{GITHUB_REPO}}%2Factions%2Fworkflows%2Fcreate-new-version-when-it-is-released.yml%2Fruns%3Fstatus%3Dcompleted%26per_page%3D1&query=%24.workflow_runs%5B0%5D.run_started_at&style=flat&label=Last%20API%20version%20check)](https://github.com/{{GITHUB_ORG}}/{{GITHUB_REPO}}/actions/workflows/create-new-version-when-it-is-released.yml)
![NPM Downloads](https://img.shields.io/npm/dm/{{NPM_FULL_PROJECT_NAME}})
![GitHub License](https://img.shields.io/github/license/{{GITHUB_ORG}}/{{GITHUB_REPO}})

This is lightweight client for {{PROJECT_NAME}}. It contains only methods and types
and exports only `fetch` call to make requests.

It supports only `application/json` content type and does not support file uploads.
However, you can use the corresponding methods to upload files by URLs or file IDs.
You can also upload files using another approach and pass the file ID to the method.

## Installation

```bash
npm install {{NPM_FULL_PROJECT_NAME}}
```

## Usage

### Examples

```typescript
import { client_setClientToken, getMe } from '{{NPM_FULL_PROJECT_NAME}}';

client_setClientToken('123:helloworld');

const main = async () => {
    const me = await getMe();
    console.log(me);
};

main();
```

The library provides 2 groups of methods:

- request methods: `getMe`, `sendMessage`, etc. These methods are used to make requests to the TODO API.
- `client_*`: methods for configuring the client.

#### `client_*` Methods

The methods starting with `client_` are used to configure the client. They are:

- `client_setClientToken(token: string)`: sets the token.
- `client_setBaseUrl(endpoint: string)`: sets the endpoint.  
- `client_setFetch(customFetch: typeof client_fetch)`: sets the fetch function for all requests.
  Defaults to the `fetch` function from the `node-fetch` package.
  If you want to use a different fetch function (e.g., for browser or Node.js), you can set it here.

## Features

- No dependencies.
- When using code minifiers, only the fetch command is exported.
- Can be used in browser and Node.js.
- Fully compatible with AWS LLRT.
- Fully typed API.

## Versioning

TODO

## Schema

The schema for the TODO is available in the
[{{SCHEMAS_REPO}}](https://github.com/{{SCHEMAS_REPO}}) repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
TODO
