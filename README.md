# Antura-test

This is my (pgrobban) submission for the Antura Frontend developer test.

This project is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Testing is done with the Jest and Puppeteer frameworks: [jest-puppeteer](https://github.com/argos-ci/jest-puppeteer)

The aim is to produce a simple web app that displays a button to fetch random user info from http://randomuser.me. The page is responsive; adjusting the browser width and height should make it look appropriate for desktop, tablets and phones.

## Getting Started

[Node.js](https://nodejs.org/en) 18.17.0 or higher is required to run the project.

Clone the repo, then install the dependencies:

```bash
npm ci
```

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Linting:

```bash
npm run lint
```

Run tests:

```bash
npm run test
```

Production build:

```bash
npm run build && npm run start
```

## Known issues
When running in dev mode, the generator runs twice upon startup. This is expected behavior from React in strict mode. See https://stackoverflow.com/questions/71957848/in-next-js-useeffect-is-run-twice-i-put-an-empty-array-as-the-second-argumen