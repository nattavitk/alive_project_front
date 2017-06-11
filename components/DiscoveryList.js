import React, { Component } from 'react';

import {
   View,
   Text,
   ScrollView,
   StyleSheet
} from 'react-native';

import DiscoveryCard from '../components/DiscoveryCard';

import { mockJourneys } from '../constants/MockData';

class DiscoveryList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         dataSource: []
      };
      this.getDiscoveryList = this.getDiscoveryList.bind(this);
   }

   componentDidMount() {
      this.setState({
         dataSource: mockJourneys[this.props.journeyId - 1].discoveries,
      })
   }

   getDiscoveryList() {

   }

   render() {
      return(
         <ScrollView>
            {
               this.state.dataSource.map((item, index) => (
                  <DiscoveryCard
                     key={index}
                     name={item.name}
                     image={item.image}
                     description={item.description}
                     region={item.region}
                  />
               ))
            }
         </ScrollView>
      );
   }
}

export default DiscoveryList;
