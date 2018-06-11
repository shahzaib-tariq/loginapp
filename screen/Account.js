import { Text,View } from 'react-native';
import React from 'react';
import AlbumList from  '../screen/AlbumList';


const Header = () => {
    const {textStyle,viewStyle}= styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Shahzaib!</Text>

            <AlbumList/>

        </View>);

};
const styles ={
    viewStyle:{
        backgroundColor:'#F8F8F8',

        justifyContent:'center',

        alignContent:'center',
        height:60,
        padding:15,

        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        flexDirection:"column",
        elevation:2,
        position:'relative'
    },
    textStyle :
        {
            textAlign: 'center',
            fontSize:30
        }
};
export default Header;