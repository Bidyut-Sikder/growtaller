# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


# Project Bundling 

# EAS Build Guide

## 💻 Local Build

> Setup (run once):
```bash
eas build:configure
```

### 📦 Create `.apk` file (Local)
```bash
npx eas build --platform android --profile preview --local
npx eas build --platform android --profile development --local
```

### 📦 Create `.aab` file (Local)
```bash
npx eas build --platform android --profile production --local
```

---

## ☁️ Online Build

> Setup (run once):
```bash
eas build:configure
```

### 📦 Create `.apk` file (Online)
```bash
npx eas build --platform android --profile preview
npx eas build --platform android --profile development
```

### 📦 Create `.aab` file (Online)
```bash
npx eas build --platform android --profile production
```

---

## 🔐 Before Production Build: Set up Keystore

1. Run to manage credentials:
```bash
npx eas credentials // download the credentials
```

2. Download and back up your credentials

> ⚠️ **Important:**  
> If you lose your keystore credentials, you **won’t be able to update** your app on the Play Store in the future.
> Make sure to store them securely.


# Necessary Packages To Make A Minumum Development Build

```
    "@expo/vector-icons": "^14.0.4",
    "eas-cli": "^16.3.1",
    "expo": "~52.0.42",
    "expo-dev-client": "~5.0.19",// uninstall before going to production
    "expo-font": "~13.0.4",
    "expo-image": "~2.0.7",
    "expo-router": "~4.0.19",
    "expo-splash-screen": "~0.29.22",
    "expo-status-bar": "~2.0.1",
    "react": "18.3.1",
    "react-native": "0.76.8",
    "react-native-gesture-handler": "~2.20.2",
    "react-native-google-mobile-ads": "14.8.0",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "~4.4.0"

```




