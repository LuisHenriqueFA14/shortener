<h1 align="center">Shortener</h1>
<p align="center"> A simple URL shortening service. </p>

## Project

Used tools:

- <a href="https://www.typescriptlang.org/">TypeScript</a>
- <a href="https://www.prisma.io/">Prisma</a>
- <a href="https://www.expressjs.io/">Express</a>

This service saves a short URL for 7 days.

## Routes

#### POST:
- `/a/create`


Example using <a href="https://github.com/httpie/httpie">HTTPie</a>:

```bash
http POST localhost:3000/a/create url="https://github.com/LuisHenriqueFA14"
```
Return:
```json
{
    "id": "d3969cdd-d931-487c-9ed1-85316b894902",
    "origin": "https://github.com/LuisHenriqueFA14",
    "short": "rxra15uj3c"
}
```

<br/>

#### GET:

- `/p/:page`

Example using <a href="https://github.com/httpie/httpie">HTTPie</a>:

```bash
http GET localhost:3000/p/rxra15uj3c
```
Return:
```
Found. Redirecting to https://github.com/LuisHenriqueFA14
```

***In the browser, it redirects to the original URL.***

## Install

Install the dependencies:
```bash
yarn --prod
# or
npm i --prod 
```

Build the TypeScript files:
```bash
yarn build
# or
npm run build
```

Run the project:
```bash
yarn start
# or
npm run start
```

### Installing for development:

Install the dependencies:
```bash
yarn
# or
npm i
```

Run the project:
```bash
yarn dev
# or
npm run dev
```
