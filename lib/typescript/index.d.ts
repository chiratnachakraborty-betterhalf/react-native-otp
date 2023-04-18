import React from 'react';
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { OtpInputsRef, SupportedKeyboardType } from './types';
declare type ClipboardType = {
    setString(string: string): void;
    getString(): Promise<string>;
};
declare const OtpInputs: React.ForwardRefExoticComponent<TextInputProps & {
    autofillFromClipboard: boolean;
    autofillListenerIntervalMS?: number | undefined;
    keyboardType?: SupportedKeyboardType;
    style?: StyleProp<ViewStyle>;
    focusStyles?: StyleProp<ViewStyle>;
    defaultValue?: string | undefined;
    handleChange: (otpCode: string) => void;
    inputContainerStyles?: StyleProp<ViewStyle>;
    inputStyles?: StyleProp<TextStyle>;
    isRTL?: boolean | undefined;
    numberOfInputs: number;
    testIDPrefix?: string | undefined;
    Clipboard: ClipboardType;
} & React.RefAttributes<OtpInputsRef>>;
export { OtpInputsRef };
export default OtpInputs;
