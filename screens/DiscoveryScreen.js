import React, { Component } from 'react';
import {
   View,
   Text,
   Image,
   StyleSheet,
   ScrollView
} from 'react-native';

import AliveMap from '../components/AliveMap';
import DiscoveryList from '../components/DiscoveryList';

const getCoordinates = (discoveries) => {
   const coordinates = discoveries.map(item => item.coordinate);
   return coordinates;
}

class DiscoveryScreen extends Component {
   static route = {
      navigationBar: {
         title: 'Journey',
      }
   }
   render() {
      return (
         <Image style={styles.image} source={require('../assets/images/bg.jpg')}>
            <ScrollView style={styles.view} >
               <View style={styles.viewInner} >
                  <Text style={styles.text} >{this.props.name}</Text>
               </View>
               <AliveMap 
                  height={200}
                  regionProps={this.props.region ? this.props.region : ''} 
                  coordinates={this.props.discoveries ? getCoordinates(this.props.discoveries) : []}
               />
               <View style={styles.viewInner2} > 
                  <Text style={styles.creator} >by {this.props.creator}</Text>  
                  <Text style={styles.text2} >{this.props.description}</Text>
                  <DiscoveryList discoveries={this.props.discoveries} journeyId={this.props.id}/>
               </View>
            </ScrollView>
         </Image>
      );
   }
}

const styles = StyleSheet.create({
   image: {
      flex: 1,
      flexDirection: 'row',
      width: 375,
   },
   view: {
      width: 355,
      marginTop: 15,
      marginLeft: 10,
      marginRight: 10,

   },
   viewInner: {
      alignItems: 'center',
      backgroundColor: 'transparent'
   },
   viewInner2: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff'
   },
   creator: {
      color: 'grey',

   },
   text: {
      fontWeight: 'bold',
      color: '#fff',
      marginVertical: 10,
   },
   text2: {
      marginTop: 10,
      fontWeight: 'bold',
      marginVertical: 10,
   }
});

export default DiscoveryScreen;