import { Comfortaa_400Regular, Comfortaa_500Medium, useFonts } from '@expo-google-fonts/comfortaa';
import { Roboto_400Regular, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import Routes from './src/routes';
import { StatusBar } from 'expo-status-bar';

const App = () => {

  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
    <StatusBar style='auto'/>
    <Routes />
    </>
  );
}

export default App;