import Colors from "@/hooks/theme/Colors";

/**
 * @description This hook returns the app's theme colors. The app doesn't support dark mode.
 * @snippet hookTheme
 * @example
 * ```tsx
 * const colors = useThemeColor();
 * ```
 */
export default function useThemeColor() {
  return Colors;
}
