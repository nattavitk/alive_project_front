import React, { Component } from 'react';
import {
   Text,
   View
} from 'react-native'

import CameraPicker from '../components/CameraPicker';
import AliveMap from '../components/AliveMap';

const coordinates = [];

class CreateScreen extends Component {
   static route = {
      navigationBar: {
         title: 'Create your journey',
      }
   }
   constructor(props) {
      super(props);
      this.state = {
         location: {
            latitude: 0,
            longitude: 0,
            altitude: 0,
            heading: 0,
            speed: 0,
         },
      };
      this.getImageLocation = this.getImageLocation.bind(this);
   }
   getImageLocation(node) {
      this.setState({
         location: node.location,
      });
      coordinates.push(this.state.location);
   }
   render() {
      return (
         <View>
            <AliveMap
               height={200}
               coordinates={coordinates}
            />
            <CameraPicker getImageLocation={this.getImageLocation} />
         </View>
      );
   }
}

export default CreateScreen;