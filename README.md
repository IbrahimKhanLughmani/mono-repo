# Mono Repo with React Native (Expo) and Next.js

This mono repo contains two projects:

1. **React Native app** using **Expo**.
2. **Next.js app** using **TailwindCSS** for styling.

## Project Structure

The repository is structured with a top-level `apps` directory containing both the React Native and Next.js applications.


### Apps Directory

- **`/apps/mobile`**: This is the React Native app, built using **Expo**.
- **`/apps/web`**: This is the Next.js app, styled with **TailwindCSS**.

## Getting Started

To get started with the monorepo, you will need to have **Yarn** and **Node.js** installed.

1. Install Yarn: [https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)
2. Install Node.js: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Once you have Yarn and Node.js installed, follow the steps below.

### Installing Dependencies

Run the following command from the root of the repo to install the dependencies for both projects:

1. yarn install
2. npm install

### Running apps

To run apps with the monorepo, you will need to run following commands in the root folder

1. yarn workspace mobile run
2. yarn workspace web run

### References

1. [https://docs.expo.dev/guides/monorepos/]
2. [https://yarnpkg.com/features/workspaces]
3. [https://tailwindcss.com/docs/installation/framework-guides/nextjs]
