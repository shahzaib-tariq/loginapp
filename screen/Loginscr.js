import {View,Text,TextInput,StyleSheet,Image} from 'react-native';
import React, { Component } from 'react';
import Button from 'react-native-button';

export default class Loginscr extends Component {
    static navigationOptions = {
        title: "login"

    };

    render() {
        return (

            <View style={styles.container}>

                <Image key={1} style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }} source={require('../login_logo.jpg')}
                >

                </Image>

                <Text key={1} style={styles.Textstyle}>
                    UserName/Email@
                </Text>

                <TextInput key={1}
                    style={styles.inputstyle}>
                </TextInput>

                <Text key={2} style={styles.Textstyle}>
                    Password##

                </Text>
                <TextInput key={2}
                    style={styles.inputstyle}>
                </TextInput>

                <Button key={3} style={{
                    color: 'green',
                    fontSize: 30,

                }}
                        onPress={() => this.props.navigation.navigate("account")}>Login !
                </Button>
            </View>

        );

    }
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
        },

        Textstyle: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color:'black'
        },

        inputstyle:
            {
                height: 50,
                fontSize:30,
                borderColor: 'gray',
                borderWidth: 1
            },
    });

