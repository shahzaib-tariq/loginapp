import { View ,Navigator,Text,Image,BackHandler} from 'react-native';
import React, { Component } from 'react';
import Button from 'react-native-button';

export default class Main extends Component {

    static navigationOptions ={
        header:null
    };
    exit_function = () => {
        BackHandler.exitApp();
    };

render() {
    return (
        <View style={{
            flex: 2,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'white'
        }}>
            <Image key={1} source={require('../South_and_Thomas_ST_Logo.jpg')}>


            </Image>
            <Image key={2} style={{width: 50, height: 50}} source={require('../download.jpg')}>


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

             <Text key={1} style={{
                color: 'blue',
                fontSize: 15,
                margin: 40
            }}
                  onPress={() => this.props.navigation.navigate("ForgetPassword")}>
                Forgot password ?

            </Text>
            
            <Button key={3} style={{
                color: 'red',
                fontSize: 20,
            }}
                    onPress={this.exit_function}>Exit!
            </Button>


        </View>

    );
}
};
