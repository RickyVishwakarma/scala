# Scala Chat Application

A real-time chat application built with Node.js, TypeScript, and Socket.IO, designed to provide seamless communication between users.

## Features

- Real-time messaging using WebSockets
- Scalable architecture with Redis for pub/sub
- Type-safe codebase with TypeScript
- Modern development workflow with Turborepo

## Tech Stack

- **Backend**: Node.js with TypeScript
- **Real-time**: Socket.IO
- **Caching & Pub/Sub**: Redis
- **Package Manager**: Yarn
- **Build Tool**: Turborepo
- **Code Formatting**: Prettier

## Prerequisites

- Node.js (v18 or higher)
- Yarn (v1.22.22 or higher)
- Redis Server

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chatApp/scala
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   ```

4. **Build for production**
   ```bash
   yarn build
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=8000
# Add other environment variables here
```

## Project Structure

```
scala/
├── apps/
│   └── server/             # Backend server
│       ├── src/
│       │   ├── services/   # Business logic
│       │   └── index.ts    # Entry point
│       └── package.json
├── packages/               # Shared packages
├── package.json            # Root package.json
└── turbo.json              # Turborepo configuration
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Lint the codebase
- `yarn format` - Format code with Prettier
- `yarn check-types` - Check TypeScript types

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.