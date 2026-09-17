import { DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { Try } from "expo-router/build/views/Try";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useFonts } from "@/components/texts/useFonts";
import { Appearance, StatusBar } from "react-native";
import ToastApp from "@/components/toast/ToastApp";
import MainFallbackApp from "@/components/containers/error/MainFallbackApp";
import Colors from "@/hooks/theme/Colors";

// La app no soporta modo oscuro: el tema de navegación usa siempre los tokens de Colors.
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.background,
    card: Colors.surface,
    text: Colors.text,
    border: Colors.border,
  },
};

// La app no soporta modo oscuro: fuerza el color scheme global para que useColorScheme()/Appearance
// devuelvan siempre "light", incluyendo librerías de terceros que lo lean internamente.
// No todas las plataformas lo implementan (ej. react-native-web), por eso el chequeo.
if (typeof Appearance.setColorScheme === "function") {
  Appearance.setColorScheme("light");
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <RootLayoutNav />
      <ToastApp />
    </>
  );
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={AppTheme}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <Try catch={MainFallbackApp}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Try>
    </ThemeProvider>
  );
}
