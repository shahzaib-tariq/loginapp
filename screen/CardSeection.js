import {
    Text,
    View
} from 'react-native';

import React from 'react';

const CardSeection = (props) => {
    return (
        <View style={styles.ContainerStyle}>
            {props.children}
        </View>





    );
};
const styles ={
    ContainerStyle: {
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
}
};
export default CardSeection;