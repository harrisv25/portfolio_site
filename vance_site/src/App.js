// import { component, useRef } from "react";
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Splash } from './Screens/Splash'
import { Home } from './Screens/Home'
import { Login } from './Screens/Login'



const App = () => {

    const Stack = createStackNavigator();

    return (
        <section id="home-page">
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}></Stack.Screen>
                    <Stack.Screen name="Login" component={Login} options={{headerLeft: () => null }}></Stack.Screen>
                    <Stack.Screen name="Home" component={Home} options={{headerLeft: () => null }}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </section>
    )
}

const styles = StyleSheet.create({})

export default App;


// examples sites here
// https://www.hostinger.com/tutorials/portfolio-website-examples?ppc_campaign=google_search_generic_hosting_all&bidkw=defaultkeyword&lo=9028784&gad_source=1&gclid=CjwKCAiAopuvBhBCEiwAm8jaMZpdqbqQ0Q3StjYefJL7ok8eQofY3b56pqctRGJI6pFTYx-6dYHeehoCYxYQAvD_BwE
// animated page transitions
// https://www.google.com/search?q=create+web+page+transition+animation&source=lmns&tbm=vid&bih=911&biw=1920&rlz=1C1VDKB_enUS951US951&hl=en&sa=X&ved=2ahUKEwiTs_G1pd6EAxWzx8kDHXjhB38Q0pQJKAF6BAgBEAQ#fpstate=ive&vld=cid:e7b0fd9e,vid:eVwH3VL1EsA,st:0
