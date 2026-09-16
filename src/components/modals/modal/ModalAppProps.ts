import {
  ModalProps as OGModalProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { JSX } from "react/jsx-runtime";

export interface ModalAppProps {
  modalProps: OGModalProps;
  children?: React.ReactNode | JSX.Element[];
  visibleContainerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
  variant?: "modal" | "bottomSheet";
}
