import React, { Component } from 'react';
import {
   View,
   Text,
   Image,
   ScrollView,
   StyleSheet
} from 'react-native';

import JourneyList from '../components/JourneyList';

class Board extends Component {
   constructor(props) {
      super(props);
      this.onPressJourneyCard = this.onPressJourneyCard.bind(this);
   }

  onPressJourneyCard(props) {
    this.props.navigator.push('discovery', { 
      name: props.name,
      creator: props.creator,
      description: props.description,
      discoveries: props.discoveries,
      region: props.region,
      id: props.id,
    });
  }

   render() {
      return (
         <Image style={styles.image} source={require('../assets/images/bg2.jpg')} >
            <ScrollView style={styles.view}>
               <Text style={styles.title} >Your Journeys</Text>
               <JourneyList style={{backgroundColor: '#fff'}} onPressJourneyCard={this.onPressJourneyCard}/>
               <Text style={styles.title} >Nearby Journeys</Text>
               <JourneyList onPressJourneyCard={this.onPressJourneyCard}/>
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
      marginTop: 30,
   },
   title: {
      backgroundColor: 'transparent',
      color: '#fff',
      paddingLeft: 10,
      fontWeight: 'bold',
   }
});

export default Board;