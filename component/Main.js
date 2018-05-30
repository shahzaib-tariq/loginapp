import { View ,Navigator,Text,Image} from 'react-native';
import React, { Component } from 'react';
import Button from 'react-native-button';

export default class Main extends Component {
    //
    // static navigationOptions ={
    //     title:"main"
    // }

render() {
    return (
        <View style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'white'
        }}>
            <Image key={1} source={require('../South_and_Thomas_ST_Logo.jpg')}>


            </Image>

            <Button key={1} style={{
                color: 'green',
                fontSize: 30,
                margin: 30,

            }} onPress={() => this.props.navigation.navigate("login")}>Login !
            </Button>

            <Button key={2} style={{
                color: 'green',
                fontSize: 30,
            }}
                    onPress={() => this.props.navigation.navigate("signup")}>Sign up!
            </Button>

            <Text style={{
                color: 'blue',
                fontSize: 15,
                margin: 40
            }}
                  onPress={() => this.props.navigation.navigate("login")}>
                Forgot password ?

            </Text>

        </View>
    );
}
};
