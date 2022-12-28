# Introduction

This project is a frontend library package built using Vite. Vite is a
lightweight, fast, and modern build tool for modern JavaScript applications,
designed for performance and ease of use. It allows you to focus on writing code
and not on the build process.

## Setup

To get started with this project, follow these steps:

1. Clone the repository:

```
git clone https://github.com/timelessco/node-js-library-template
```

2. Install the dependencies:

```
pnpm install
```

3. Start the development server:

```
pnpm run dev
```

This will start a development server at `http://localhost:5173`, and you can
view the application in your browser. Any changes you make to the code will be
automatically reloaded in the browser.

This will generate a production-ready build in the `dist` folder.

## Build Library

To build the project for production, run the following command:

```
pnpm run build
```

This will generate a production-ready build library in the `lib` folder.

## Other Commands

In addition to the dev and build commands, there may be other commands
available, such as:

`check`: Run the linters & formatters to check the code for style and syntax
errors.

`fix`: Run the linters & formatters to check the code for style and syntax
errors. If any errors are found, they will be fixed automatically.

`test`: Run the test suite for the project.

`commit`: Run the commit wizard to generate a commit message.

`release`: Run the `release-it` tool to generate a new release.

## License

This project is licensed under the [MIT License](./LICENSE).
