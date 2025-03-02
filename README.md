This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Local development
First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Slugs
In this project, the home page uses the slug `home`. We don't want to use it in links, so the [Navigation component](components/Navigation.js) changes that to `/`. We want to use `home` because the build process doesn't play nicely with the slash as the slug.
