# Zustand Practice App

This project demonstrates a simple React application using [Zustand](https://github.com/pmndrs/zustand) for global state management. It showcases how to manage and share state across components without prop drilling or Redux.

## Features

- **Header**: Displays the total number of users (global state).
- **AddUser**: Allows adding a new user, updating the global state.
- **UserList**: Lists all users and allows deleting users, all using shared state.
- **No prop drilling**: All state is managed globally via Zustand.
- **No Redux**: Zustand is used for simplicity and minimal boilerplate.

## Project Structure

```
src/
  App.tsx         # Main app component
  Header.tsx      # Shows user count
  AddUser.tsx     # Add user form
  UserList.tsx    # List and delete users
  store/
	 useUserStore.ts # Zustand store for users
```

## Getting Started

1. **Install dependencies**
	```bash
	npm install
	```

2. **Start the development server**
	```bash
	npm start
	```

3. **Open the app**
	Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Why Zustand?
- Minimal and unopinionated
- No boilerplate
- Simple API for global state
- No need for context providers or Redux