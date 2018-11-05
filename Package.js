import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { Icon, Button, Container, Header, Content, Left} from 'native-base';

export default class Package extends Component {
    render() {
        return (
            <View style = {styles.container}>

             </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    }
});