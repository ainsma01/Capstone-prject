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
  TouchableOpacity
} from 'react-native';

export default class Community extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {day:1, month: 'Sep'}, 
        {day:2, month: 'Jan'}, 
        {day:3, month: 'Aug'}, 
        {day:4, month: 'Dec'}, 
        {day:5, month: 'Jul'}, 
        {day:6, month: 'Oct'}, 
        {day:7, month: 'Sep'},
        {day:8, month: 'Jan'},
        {day:9, month: 'May'},
      ]),
    };
  }

  eventClickListener = (viewId) => {
    Alert.alert("alert", "event clicked");
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView enableEmptySections={true}
          style={styles.eventList}
          dataSource={this.state.dataSource}
          renderRow={(event) => {
            return (
              <TouchableOpacity onPress={() => this.eventClickListener("row")}>
                <View style={styles.eventBox}>
                  <View style={styles.eventDate}>
                     <Text  style={styles.eventDay}>{event.day}</Text>
                     <Text  style={styles.eventMonth}>{event.month}</Text>
                  </View>
                  <View style={styles.eventContent}>
                    <Text  style={styles.eventTime}>11:00 am - 12:00 pm</Text>
                    <Text  style={styles.userName}>Computer Science Colloquium </Text>
                    <Text  style={styles.description}>Come listen to smart people talk about computer science and stuff</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#3498db",
  },
  eventList:{
    marginTop:20,
  },
  eventBox: {
    padding:10,
    marginTop:5,
    marginBottom:5,
    flexDirection: 'row',
  },
  eventDate:{
    flexDirection: 'column',
  },
  eventDay:{
    fontSize:50,
    color: "orange",
    fontWeight: "600",
  },
  eventMonth:{
    fontSize:16,
    color: "orange",
    fontWeight: "600",
  },
  eventContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
    backgroundColor: '#FFFFFF',
    padding:10,
    borderRadius:10
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  eventTime:{
    fontSize:18,
    color:"#151515",
  },
  userName:{
    fontSize:16,
    color:"#151515",
  },
});