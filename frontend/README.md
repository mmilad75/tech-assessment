This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Before trying to run the app, create a .env file in the frontend folder and add the secret key like this:
```
NEXT_PUBLIC_HASURA_ADMIN_SECRET='<your-hasura-admin-secret>'
```

Now, install the dependecies by running:
```
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Running Storybook

In order to run Storybook, run the following command:
```
npm run storybook
```
