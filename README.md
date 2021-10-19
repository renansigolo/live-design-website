# Live Design

Source code of the Live Design website

## Development

If you're configuring this app for the first time

1. Clone the project

```
git clone https://github.com/renansigolo/live-design-website.git
```

2. Grab the .env variables from the vercel server

> You will need the [Vercel CLI](https://vercel.com/cli) installed on your local machine

```
vercel env pull
```

## Usage

### Install Dependencies

```bash
npm i
```

### Development server

```bash
npm run dev
```

## Testing

```bash
npm run lint
```

## Build

```bash
npm run build
```

## Author

- [Renan Sigolo](https://www.renansigolo.com/)

## License

The code is open source and available under the [Apache License 2.0](LICENSE.md).

## Next.js Documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
