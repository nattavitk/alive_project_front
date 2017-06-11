import React, { Component } from 'react';
import {
   View,
   Text,
   Image,
   StyleSheet,
   Platform,
   TouchableHighlight,
} from 'react-native';

class JourneyCard extends Component {
   static route = {
      navigationBar: {
         title: 'JourneyCard',
      }
   }
   
   constructor(props) {
      super(props);
      this._handlePress = this._handlePress.bind(this);
   }

   _handlePress = () => {
      this.props.onPressJourneyCard(this.props);
   }

   render() {
      return (
         <TouchableHighlight underlayColor={'#E6E6E6'} onPress={this._handlePress}>
            <View style={styles.card} >
               <Image style={styles.stretch} source={{uri: this.props.image}} />
               <View style={styles.textCard}>
                  <Text style={styles.by}>by {this.props.creator}</Text>
                  <Text style={styles.title}>{this.props.name}</Text>
               </View>
            </View>
         </TouchableHighlight>
      );
   }
}

const styles = StyleSheet.create({
   card: {
      width: 100,
      height: 190,
      flex: 1,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#888',
      backgroundColor: 'white',
      marginLeft: 5,
      marginRight: 5,
      ...Platform.select({
         ios: {
         shadowColor: 'black',
         shadowOffset: { height: -3 },
         shadowOpacity: 0.1,
         shadowRadius: 3,
         },
         android: {
         elevation: 20,
         },
      }),
   },
   stretch: {
      height: 100,
      width: 100,
   },
   textCard: {
      padding: 7,
   },
   by: {
      color: 'grey',
      fontSize: 10,
      marginVertical: 5,
   },
   title: {
      fontWeight: 'bold',
   }
});

export default JourneyCard;