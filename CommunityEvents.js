import React, {Component} from 'react';
import {Modal, Text, ScrollView, TouchableHighlight, View, Alert, FlatList} from 'react-native';
import { Content, Card, CardItem, Body, Left} from 'native-base';
import { List, ListItem, SearchBar, Header } from 'react-native-elements';
export default class CommunityEvents extends Component {
  
  expandCampusEvent(event){
      console.log(JSON.stringify(event));
      this.setState({modalInfo: JSON.stringify(event)});
      this.setState({modalVisible: true});
  }
  state = {
    modalVisible: false,
    modalInfo: "{}",
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    var title = ""
    var date = ""
    var description = ""
    var location = ""
    if(JSON.parse(this.state.modalInfo).title != undefined){
      var eventData = JSON.parse(this.state.modalInfo)
      title = eventData.title
      date = eventData.dateTimeFormatted.replace("&nbsp;&ndash;&nbsp;","-").replace("&nbsp;"," ")
      description = eventData.description
      location = eventData.location
    }
    return (
    <View style={{marginTop:0}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
        <ScrollView style={{
          backgroundColor:"white",
          marginTop:100,
          marginBottom:100,
          marginLeft:50,
          marginRight:50,
          borderRadius:10
        }}>
            <TouchableHighlight
              style= {{backgroundColor:'grey'}}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text style={{marginTop: 10, marginBottom: 10,textAlign: 'center'}}>Close</Text>
            </TouchableHighlight>
            <Text style={{textAlign: 'center'}}>Title:{title}</Text>
            <Text style={{textAlign: 'center'}}>Date: {date}</Text>
            <Text style={{textAlign: 'center'}}>Description: {description}</Text>
            <Text style={{textAlign: 'center'}}>Location: {location}</Text>
        </ScrollView>
      </Modal>
        <FlatList
          data={this.props.data}
          renderItem={({item}) =>
          (<ListItem
            title={item.title}
            subtitle={item.dateTimeFormatted.replace("&nbsp;&ndash;&nbsp;","-").replace("&nbsp;"," ")}
            onPress= {() => {this.expandCampusEvent(item)}}
          />)}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeparator} 
          ListHeaderComponent={<Header centerComponent={{ text: 'Gettysburg Campus Events', style: { color: '#fff' } }}/>}
        />
    </View>
  );
  }
}
module.export = CommunityEvents;