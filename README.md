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
```

- make a folder name .env and paste it on there

```bash
DATABASE_URI="mongodb+srv://task:task@cluster0.yrssrk8.mongodb.net/task-management?retryWrites=true&w=majority&appName=Cluster0"
PORT=8000
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

- make a folder name .env.local and paste it on there

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y29uY2lzZS10aXRtb3VzZS03MC5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_7gAqNQlRVcmjO9e46eta2Pd9fzRlhmpOMNT0CtPr3C

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
