import { Stack } from "expo-router";

export const router = {
  unstable_settings: {
    hideRootLayoutLoader: true,
  },
};

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
