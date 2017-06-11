import React, { Component } from 'react';
import {
   View,
   Text,
   Image,
   StyleSheet,
} from 'react-native';

class DiscoveryDetail extends Component {
   static route = {
      navigationBar: {
         title: 'Quest',
      }
   }

   render() {
      return (
         <View>
            Hi
         </View>
      );
   }
}

const styles = StyleSheet.create({

});

export default DiscoveryDetail;