const IS_DEV = process.env.APP_VARIANT === "development";
const IS_TEST = process.env.APP_VARIANT === "test";

export default {
  expo: {
    name: "Personal Assistant" + (IS_DEV ? " - Dev" : IS_TEST ? " - Test" : ""),
    slug: "personal-assistant",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "personal-assistant",
    userInterfaceStyle: "automatic",
    ios: {
      supportsTablet: true,
      bundleIdentifier:
        "com.personalassistant" + (IS_DEV ? ".dev" : IS_TEST ? ".test" : ""),
    },
    android: {
      package:
        "com.personalassistant" + (IS_DEV ? ".dev" : IS_TEST ? ".test" : ""),
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      predictiveBackGestureEnabled: false,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      "expo-secure-store",
      "@react-native-community/datetimepicker",
      "expo-sqlite",
      "expo-status-bar",
      "expo-web-browser",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      eas: {
        projectId: "d6568ac7-465f-415a-80cb-58bd427e86f2",
      },
    },
  },
};
