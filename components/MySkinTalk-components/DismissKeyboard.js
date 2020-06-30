import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View} from 'react-native';
// TEST:  Higher Order Component to dismiss the keyboard
 const DismissKeyboard = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};
const DismissKeyboardView = DismissKeyboard(View)

export default DismissKeyboard;