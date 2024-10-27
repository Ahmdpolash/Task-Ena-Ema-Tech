## Project setup

```bash
$ git clone https://github.com/Ahmdpolash/Task-Ena-Ema-Tech.git
```

## Server setup

- open folder in vs code

```bash
cd server
```

```
npm i
tsc
```

- make a folder in root name .env and paste it on there

```bash
DATABASE_URI=
PORT=
```

-run the server

```bash
# development
$ npm run start:dev

# watch mode
$ npm run watch

# production mode
$ npm run start:prod
```

## client setup

```
cd client
```

```
npm i
```

- make a folder in root name .env.local and paste it on there

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard

NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/sign-in
```

```
npm run dev
```

## for any problem to run this project , whatsApp - 01756213028
