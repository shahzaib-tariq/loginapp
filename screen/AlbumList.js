import React,{Component} from 'react';
import { View,ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from '../screen/AlbumDetail';

class AlbumList extends Component {
    state = { albums: []};


componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response =>this.setState({ albums: response.data}));
    }
renderAlbums(){
    return this.state.albums.map(albums =>
        <AlbumDetail key={albums.title} album={albums} />
    );
}

 render() {

    console.log(this.state);
    return (

        <ScrollView
            >

            <View >
            {this.renderAlbums()}
            </View>
        </ScrollView>
    );
}
}
export default AlbumList;