import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';
import { Content, Card, CardItem, Body, Left} from 'native-base';
import { List, ListItem, SearchBar, Header } from 'react-native-elements';
export default class CommunityEvents extends Component {
  render() {
    return (
    <List>
      <FlatList
        renderItem={({item}) =>
        (<ListItem
        title={item.title}
        subtitle={item.dateTimeFormatted}
        />)}
        data={this.props.data}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={this.renderSeparator} 
        ListHeaderComponent={<Header centerComponent={{ text: 'Gettysburg Campus Events', style: { color: '#fff' } }}/>}
      />
    </List>
  );
  }
}
module.export = CommunityEvents;