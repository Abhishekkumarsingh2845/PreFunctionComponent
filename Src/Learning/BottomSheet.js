
import React, { useRef, useCallback } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const Homee = () => {
  const bottomSheetRef = useRef(null);

  const openSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Button title="Open Bottom Sheet" onPress={openSheet} />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={["45%"]}
        onClose={closeSheet}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.sheetContent}>Hello from the Bottom Sheet!</Text>
          <Button title="Close" onPress={closeSheet} />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  sheetContent: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Homee;
