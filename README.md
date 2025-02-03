# React Native Template with Expo Router and Clerk

A modern and feature-rich template for building React Native applications using Expo Router, Clerk Authentication, and React Native Bottom Tabs.

## 🚀 Features

- **Expo Router**: File-based routing system for your React Native app
- **Clerk Authentication**: Secure authentication and user management
- **React Native Bottom Tabs**: Smooth navigation with bottom tab bar
- **Type Safety**: Written in TypeScript for better development experience

## 📱 Tech Stack

- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/routing/introduction/)
- [Clerk](https://clerk.com/)
- [React Native Bottom Tabs](https://github.com/callstackincubator/react-native-bottom-tabs)
- TypeScript

## 🛠️ Getting Started

1. Clone this repository

```bash
git clone <your-repository-url>
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

```bash
cp .env.example .env
```

Add your Clerk credentials to the `.env` file.

4. Start the development server

```bash
npm start
# or
yarn start
```

## 📁 Project Structure

```
├── app/
│   ├── (auth)/        # Protected routes
│   ├── (public)/      # Public routes
│   └── _layout.tsx    # Root layout
├── lib/               # Utility functions
└── components/        # Reusable components
```

## 🔐 Authentication

This template uses Clerk for authentication. The routes are organized into two groups:

- `(public)`: Accessible without authentication (sign-in, sign-up)
- `(auth)`: Protected routes that require authentication

## 🎯 Features

- File-based routing with Expo Router
- Authentication flow with Clerk
- Bottom tab navigation
- TypeScript support
- Environment variable configuration
- Organized project structure

## 📄 License

MIT

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
