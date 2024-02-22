import {fonts} from "./src/global/fonts";
import {useFonts} from 'expo-font';
import MainStack from "./src/navigation/MainStack";

export default function App() {

    const [fontsLoaded, fontError] = useFonts(fonts);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return <MainStack/>
}
