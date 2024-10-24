import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import aaa from "./UserSlice"

const store = configureStore({
  reducer: {
    favorites: aaa,
  },
});

export default store;
