import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./Src/Redux/AuthRedux/store";
import Login from "./Src/Screen/Login";
import Otp from "./Src/Screen/Otp";
import Signup from "./Src/Screen/Signup";

const Stack = createStackNavigator();

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
