import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  ListView,
  Picker,
  TouchableOpacity
} from 'react-native';
import CommunityEvents from './CommunityEvents';
export default class Community extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      eventData:[],
      chosenValue: "all",
      filter:["all", "academic", "athletics", "social"],
      apiLinks:['https://25livepub.collegenet.com/calendars/gbc-all-events-shell.json', 'https://25livepub.collegenet.com/calendars/gbc-all-events-shell.json?mixin=7208%2c19644%2c7015', 'https://25livepub.collegenet.com/calendars/gbc-all-events-shell.json?mixin=7216%2c7217%2c7015', 'https://25livepub.collegenet.com/calendars/gbc-all-events-shell.json?mixin=7266%2c7015']
    };
    this.getData = this.getData.bind(this);
    this.renderNewEvents = this.renderNewEvents.bind(this);
  }
  getData(eventType){
    console.log(eventType);
    var i = this.state.filter.indexOf(eventType);
    console.log(i);
      return fetch(this.state.apiLinks[i])
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({eventData: responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
  }
  renderNewEvents(eventType){
    this.setState({chosenValue: eventType})
    this.getData(eventType);
  }
  componentDidMount() {
      this.getData("all");
  }
  render() {
        return (
          <View>
          <View>
          <Picker
            selectedValue={this.state.chosenValue}
            //style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.renderNewEvents(itemValue)}>
            <Picker.Item label="All Events" value="all" />
            <Picker.Item label="Athletic Events" value="athletics" />
            <Picker.Item label="Academic Events" value="academic" />
            <Picker.Item label="Social Events" value="social" />
          </Picker>
          </View>
          <CommunityEvents data = {this.state.eventData}/>
          </View>
        );
  }

}