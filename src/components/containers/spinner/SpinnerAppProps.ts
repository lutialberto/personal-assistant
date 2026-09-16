import { PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface SpinnerAppProps extends PropsWithChildren {
  visible: boolean;
  style: StyleProp<ViewStyle>;
  variant?: "default" | "overlap";
}
