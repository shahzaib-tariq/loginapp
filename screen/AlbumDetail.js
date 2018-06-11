import React,{Component} from 'react';
import { View,Text,Image} from 'react-native';
import Card from './Card';
import CardSeection from '../screen/CardSeection';

const AlbumDetail = ({album}) => {
    const { title,artist,thumbnail_image,image }=album;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    }=styles;

    return (
        <Card>
         <CardSeection>
             <View style={thumbnailContainerStyle}>
                 <Image style={thumbnailStyle}
                     source={{ uri:thumbnail_image}}/>

             </View>

             <View style={headerContentStyle}>
                 <Text style={headerTextStyle} >{title}</Text>
                 <Text >{artist}</Text>
             </View>
         </CardSeection>

            <CardSeection>
                <Image style={imageStyle}
                    source={{ uri:image}}/>
                </CardSeection>

    </Card>
    );

};
const styles ={
    headerContentStyle: {
        flexDirection:'column',
        justifyContent:'space-around'
     },
    headerTextStyle:{
        fontSize:18
    },
     thumbnailStyle:{
       height:50,
       width:50
     },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null,
        borderRadius:100
    }

};

export default AlbumDetail;