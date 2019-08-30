import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import store from "./app/configuration/store";
import AppNavigator from "./app/navigations/router";

function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}

AppRegistry.registerComponent("boilerplateredux", () => App);
