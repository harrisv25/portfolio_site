import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useMemo } from "react";
import { Animated, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

const MINUMUM_TIME_IN_MS_FOR_INTRO = 2000;
const ANIMATION_DURATION_MS = 1000;

export const Splash = () => {
    const [isWaiting, setIsWaiting ] =useState(true);
    const [loggedIn, setLoggedIn ] =useState(false);


    const navigation = useNavigation();

    const [colors, setColors] = useState(['red', 'blue', 'yellow', 'orange', 'green'])

    const animatedSpin = new Animated.Value(0);

    const spin = animatedSpin.interpolate({
        inputRange: [0,1], 
        outputRange: ['0deg', '360deg']
    });

    const animatedClockwise = Animated.timing(animatedSpin, {
        toValue: 1,
        duration: ANIMATION_DURATION_MS,
        useNativeDriver: true,
    });

    const animatedCounterClockwise = Animated.timing(animatedSpin, {
        toValue: 0,
        duration: ANIMATION_DURATION_MS,
        useNativeDriver: true,
    });

    const sequence = Animated.sequence([animatedClockwise, animatedCounterClockwise]);

    Animated.loop(sequence).start();

    const randomBackgroundColor = useMemo(() => {
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }, []);

    useEffect (() => {
        const timeoutID = setTimeout(() => {
            setIsWaiting(false);
        }, MINUMUM_TIME_IN_MS_FOR_INTRO);


        //Fake log in call
        const random = Math.random();

        if (random < 0.5) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }

        return () => {
            clearTimeout(timeoutID);
        }
    }, []);

    useEffect(() => {
        if (isWaiting) {
            return;
        }

        if (loggedIn) {
            navigation.navigate('Home', {});
        } else {
            navigation.navigate('Login', {})
        }
    }, [loggedIn, isWaiting])

    return (
        <SafeAreaView style={[styles.background, { backgroundColor: randomBackgroundColor }]}>
            <Animated.View style={{transform: [{rotate: spin}]}}>
                <ImageBackground style={styles.image} source={require('../images/B3E18D2A-5984-4B05-BF6D-EC3B491105BB.JPG')}></ImageBackground>
            </Animated.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
    }
});