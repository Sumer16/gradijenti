# [Gradijenti](https://gradijenti.vercel.app)

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## About Gradijenti

Gradijenti is a fully functional linear gradient colors gallery app developed using the popular framework React Native & build framework Expo. This app is available to run on Android, iOS, & Web.

## Screenshots

<table>
  <tr>
    <td>
      <img src="./gradijenti-1.png" width=250 height=544 alt="First Screenshot" />
    </td>
    <td>
      <img src="./gradijenti-2.png" width=250 height=544 alt="Second Screenshot" />
    </td>
  </tr>
</table>

## Installation

### Clone the repository
To get started, you'll need to clone this repository to your local machine. You can do this by running the following in the command line:

```bash 
git clone https://github.com/Sumer16/gradijenti.git 
```

### Install dependencies

Once you've cloned the repository, navigate to the project directory and run npm/yarn install to install all the necessary dependencies.

```bash
cd gradijenti
npm install
```

### Run the App

After the dependencies have been installed, you can run the app in dev mode by running:

```bash
npx expo start
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

Open your app in the [Expo Go app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

If you want to run your application on an iOS simulator or a trusted iOS device then use these commands:

```bash
npx expo start --ios
```

If you want to run your application on an Android emulator or a connected device then use these commands:

```bash
npx expo start --android
```

If you want to run your application on the web then use these commands:

```bash
npx expo start --web
```

These commands are like `npm start` / `yarn start`, but attempts to open your app on a connected Android/iOS device or emulator/simulator or also on the web.

NOTE: If you want to use these commands to run or deploy your app on a real device/hosting platform you will need to add a [development build](https://docs.expo.dev/develop/development-builds/introduction/) for each platform.

## Learn more

To learn more about developing your own project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with their [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
