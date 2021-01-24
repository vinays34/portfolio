import { Animated } from "react-native";

export const fadeIn = (anim,delay) => {
    // Will change fadeAnim value to 1 in 3 seconds
    Animated.timing(anim, {
      toValue: 1,
      duration: delay?delay: 3000,
    }).start();
  };

 export const fadeOut = (anim,delay) => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(anim, {
      toValue: 0,
      duration:  delay?delay: 3000,
    }).start();
  };