import React, { Component } from 'react';

import {
   View,
   Text,
   ScrollView,
   StyleSheet
} from 'react-native';

import JourneyCard from '../components/JourneyCard';

import config from '../config';
import { mockJourneys } from '../constants/MockData';

class JourneyList extends Component {
   static route = {
      navigationBar: {
         title: 'JourneyList',
      }
   }
   constructor(props) {
      super(props);
      this.state = {
         dataSource: []
      };
      this.getJourneyList = this.getJourneyList.bind(this);
   }

   componentDidMount() {
      this.setState({
         dataSource: mockJourneys,
      })
   }

   getJourneyList() {

   }

   render() {
      return(
         <ScrollView horizontal style={{
            marginLeft: 5,
            marginRight: 5,
            marginVertical: 10,
            }} 
         >
            {
               this.state.dataSource.map((item, index) => (
                  <JourneyCard
                     key={index}
                     id={item.id}
                     name={item.name}
                     description={item.description}
                     creator={item.creator}
                     image={item.image}
                     discoveries={item.discoveries}
                     region={item.region}
                     onPressJourneyCard={this.props.onPressJourneyCard}
                  />
               ))
            }
         </ScrollView>
      );
   }
}

export default JourneyList;
