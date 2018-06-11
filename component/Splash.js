import {View,Text,Image,ActivityIndicator,StyleSheet} from 'react-native';
import React,{Component} from 'react';


export default class Splash extends  Component{
    static navigationOptions ={
        header:null
    };
    componentWillMount()
    {
        setTimeout(()=>{
            this.props.navigation.navigate('main')
        },2000)
    }

    constructor() {
        super();
        this.state = {
            showMe: true
        }
    }

    render() {
        return (


            <View style={{ flex:1,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
            backgroundColor:'white'
            }}>

                {/*<Image*/}
                    {/*key={2} style={{width:100, height: 100,}} source={require('../RS-MInion-001-169x300.jpg')}>*/}

                {/*</Image>*/}

            <Image
                key={2} style={{width: 50, height: 50,}} source={require('../download.jpg')}>

                </Image>

                <Text style={{fontSize:40,
                    backgroundColor:'transparent',
                    color: 'black',
                    alignSelf:'center'}}>
                    loding..!
                </Text>

                <ActivityIndicator size="large" color='blue' />

            </View>


        )
    }
}

