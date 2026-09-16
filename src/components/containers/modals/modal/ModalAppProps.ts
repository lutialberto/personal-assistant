import { StyleProp, ViewStyle, ModalProps as RNModalProps } from "react-native";
import { JSX } from "react/jsx-runtime";

export interface ModalAppProps {
  modalProps: RNModalProps;
  children?: React.ReactNode | JSX.Element[];
  visibleContainerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
  variant?: "modal" | "bottomSheet";
}
