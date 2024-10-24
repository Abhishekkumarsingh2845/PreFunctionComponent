import { StyleSheet, Text, View } from "react-native";
import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  items: [],
};

const fav = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    add: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existing) {
        state.items.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { add, remove } = fav.actions;
export default fav.reducer;
