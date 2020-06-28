import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = {albums: []};
  componentDidMount() {
    axios
      .get('http://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => this.setState({albums: res.data}));
  }

  renderAlbums() {
    return this.state.albums.map((album) => (
      <Text key={album.title}>{album.title}</Text>
    ));
  }
  render() {
    console.log(this.state);
    return (
      <View>
        <Text>AlbumList!</Text>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;

const styles = StyleSheet.create({});
