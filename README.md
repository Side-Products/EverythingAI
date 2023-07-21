# EverythingAI

<br />

Production: https://everythingai.club

Latest Dev Updates: https://everythingai.club

### Instructions

### Start MongoDB locally

On MacOS: `brew services start mongodb-community`

### Environment Variables

```
Note: .env.example is an example of the secrets file. .env.*.local should be added to .gitignore, as those files are intended to be ignored. .env.development.local is where secrets can be stored.

Defaults are set in .env.example

Create .env.development.local file and replace env variables with your own taking reference from .env.example
```

Environment variables load order- https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order

Change env variables on Vercel from CLI- https://vercel.com/docs/cli/env

To turn on dev server-
```sh
npm run dev
```

### Using Docker

Build a docker container- 
```sh
docker-compose up -d --build
```

To turn off dev server-
```sh
docker-compose down
```

Turn on dev server-
```sh
docker-compose up
```

### MongoDB

Dev:

Prod:


### ReCAPTCHA

https://www.google.com/u/7/recaptcha/admin/site/628283073


### Google Analytics

https://analytics.google.com/analytics/web/?authuser=7#/a263373608p363795173/admin/streams/table/4891232010