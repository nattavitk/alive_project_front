import React, { Component } from 'react';
import {
   View,
   Text,
   Image,
   TouchableHighlight,
   StyleSheet
} from 'react-native';

class DiscoveryCard extends Component {
   static route = {
      navigationBar: {
         title: 'DiscoveryCard',
      }
   }

   constructor(props) {
      super(props);
      this._handlePress = this._handlePress.bind(this);
   }

   _handlePress = () => {
      // this.props.onPressJourneyCard(this.props);
      // this.props.navigator.push('discoveryDetail');
   }

   render() {
      return (
         <TouchableHighlight underlayColor={'#E6E6E6'} onPress={this._handlePress}>
            <View style={styles.card} >
               <Image style={styles.stretch} source={{uri: this.props.image}} />
               <View style={styles.textCard}>
                  <Text style={styles.title}>{this.props.name}</Text>
               </View>
            </View>
         </TouchableHighlight>
      );
   }
}

const styles = StyleSheet.create({
   card: {
      width: 355,
      height: 50,
      borderBottomWidth: 0.5,
      borderStyle: 'solid',
      borderColor: 'grey',
      flex: 1,
      flexDirection: 'row',
      marginVertical: 5,
      alignItems: 'center',
   },
   stretch: {
      height: 50,
      width: 50,
   },
   textCard: {
      width: 355,
      marginLeft: 50,
   },
   title: {
      color: '#000',
   }

});

export default DiscoveryCard;