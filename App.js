import {fonts} from "./src/global/fonts";
import {useFonts} from 'expo-font';
import {Provider} from "react-redux";
import store from "./src/store";
import TabNavigator from "./src/navigation/TabNavigator";

export default function App() {

    const [fontsLoaded, fontError] = useFonts(fonts);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Provider store={store}>
            <TabNavigator/>
        </Provider>
    )
}
