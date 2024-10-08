import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { AnimateTextOnPath } from "./AnimateTextOnPath";
import { AnimationWithTouchHandler } from "./AnimationWithTouchHandler";
import { BokehExample } from "./BokehExample";
import { InterpolationWithEasing } from "./InterpolationWithEasing";
import { SimpleAnimation } from "./SimpleAnimation";
import { SpringBackTouchAnimation } from "./SpringBackTouch";

const Reanimated: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <SimpleAnimation />
      <InterpolationWithEasing />
      <AnimationWithTouchHandler />
      <AnimateTextOnPath />
      <SpringBackTouchAnimation />
      <BokehExample />
    </ScrollView>
  );
};

export default Reanimated;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingBottom: 80,
  },
});
