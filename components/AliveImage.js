import React, { Component } from 'react';
import {
   TouchableOpacity,
   Image,
   StyleSheet
} from 'react-native';

class AliveImage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         node: {},
      };
      this.handleOnPress = this.handleOnPress.bind(this);
   }

   componentDidMount() {
      this.setState({
         node: this.props.node,
      });
   }

   handleOnPress() {
      this.props.getImageLocation(this.state.node);
   }

   render() {
      return (
         <TouchableOpacity onPress={this.handleOnPress} >
            <Image
                  style={styles.image}
                  source={{ uri: this.props.node.image.uri }}
            />
         </TouchableOpacity>
      );
   }
}

const styles = StyleSheet.create({
   image: {
      height: 125,
      width: 125,
   }
});

export default AliveImage;