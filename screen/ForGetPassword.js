import { View,Text,TextInput,StyleSheet,Image,ScrollView } from 'react-native';
import React, { Component } from 'react';
import Button from 'react-native-button';

export default class Signupscr extends Component {
    static navigationOptions = {
        title: "Forget password !"
    };

    render() {
        return (

            <View style={styles.container}>

                <Image style={{alignItems:'center',
                    justifyContent:'center'}}   source={require('../singuplogo.jpg')}
                >

                </Image>

                <Text key={1} style={styles.Textstyle}>
                    User Name
                </Text>
                <TextInput key={1}
                           style={styles.inputstyle}>
                </TextInput>

                <Text key={2} style={styles.Textstyle}>
                    Email
                </Text>
                <TextInput key={2}
                           style={styles.inputstyle}>
                </TextInput>

                <Text key={3} style={styles.Textstyle}>
                    Password
                </Text>
                <TextInput key={3}
                           style={styles.inputstyle}>
                </TextInput>

                <Text key={4} style={styles.Textstyle}>
                    Confirm password
                </Text>
                <TextInput key={4}
                           style={styles.inputstyle}>
                </TextInput>



                <Button key={3} style={{
                    color: 'green',
                    fontSize: 30,

                }}
                        onPress={() => this.props.navigation.navigate("account")}>Update!
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
        color:'black',
    },

    inputstyle:
        {
            height: 50,
            fontSize:30,
            borderColor: 'gray',
            borderWidth: 1
        },
});
