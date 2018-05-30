import {View,Text,Image,ActivityIndicator,StyleSheet} from 'react-native';
import React,{Component} from 'react';


export default class Splash extends  Component{
    static navigationOptions ={
        header:null
    };
    componentWillMount()
    {
        setInterval(()=>{
            this.props.navigation.navigate('main')
        },2000)
    }
    componentWillUnmount()
    {
        setInterval(()=>{
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
            backgroundColor:'#79bdeb'
            }}>



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

