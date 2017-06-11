import React, { Component } from 'react';
import {
   Image,
   View,
   Text,
   ScrollView,
   ImagePickerIOS,
   StyleSheet,
   CameraRoll,
   TouchableOpacity
} from 'react-native';

import AliveImage from './AliveImage';

class CameraPicker extends Component {
   constructor(props) {
      super(props);
      this.state = {
         images: [],
         isCameraLoaded: false,
      }
   }

   componentDidMount() {
      CameraRoll.getPhotos({ first: 15, groupTypes: 'All' })
         .then((data) => {
            const assets = data.edges;
            const node = assets.map(asset => asset.node);
            this.setState({
               isCameraLoaded: true,
               images: node
            })
         })
         .catch((e) => {
            console.error(e);
         });
   }

   render() {
      if (!this.state.isCameraLoaded) {
         return (
            <View>
               <Text>Loading...</Text>
            </View>
         );
      }
      return (
         <ScrollView style={styles.container}>
            <View style={styles.view}>
               {this.state.images.map((node, index) => 
                  <AliveImage key={index} node={node} getImageLocation={this.props.getImageLocation} />
               )}
            </View>
         </ScrollView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      width: 375,
      height: 600,
   },
   view: {
      width: 375,
      height: 600,
      flex: 1, 
      flexDirection: 'row',
      flexWrap: 'wrap',
   },
});

export default CameraPicker;