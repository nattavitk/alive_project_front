import React, { Component } from 'react';
import {
   Platform,
   StyleSheet,
   Text,
   View,
   Dimensions
} from 'react-native';
import { MapView } from 'expo';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / 400;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initialPosition = {
   latitude: 13.736717,
   longitude: 100.523186,
   latitudeDelta: LATITUDE_DELTA,
   longitudeDelta: LONGITUDE_DELTA,
}

const mapStyle = [
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
];

class AliveMap extends Component {
   constructor(props) {
      super(props);
      this.state = {
         region: this.props.regionProps || initialPosition,
      }
      this.onRegionChange = this.onRegionChange.bind(this);
      this.getLocationAsync = this.getLocationAsync.bind(this);
   }

   componentWillMount() {
      if (Platform.OS === 'android' && !Constants.isDevice) {
         this.setState({
         errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
         });
      } else {
        //  this.getLocationAsync();
      }
   }

   componentWillReceiveProps(nextProps) {
    //  if (this.props.regionProps && nextProps.region !== this.props.regionProps) {
    //    this.setState({
    //      region: this.props.regionProps,
    //    });
    //  }
   }

   componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
   }

   getRegionForCoordinates(points) {
      // points should be an array of { latitude: X, longitude: Y }
      let minX, maxX, minY, maxY;

      // init first point
      ((point) => {
         minX = point.latitude;
         maxX = point.latitude;
         minY = point.longitude;
         maxY = point.longitude;
      })(points[0]);

      // calculate rect
      points.map((point) => {
         minX = Math.min(minX, point.latitude);
         maxX = Math.max(maxX, point.latitude);
         minY = Math.min(minY, point.longitude);
         maxY = Math.max(maxY, point.longitude);
      });

      const midX = (minX + maxX) / 2;
      const midY = (minY + maxY) / 2;
      const deltaX = (maxX - minX);
      const deltaY = (maxY - minY);

      return {
         latitude: midX,
         longitude: midY,
         latitudeDelta: LATITUDE_DELTA,
         longitudeDelta: LONGITUDE_DELTA
      };
   }

   getLocationAsync() {
      navigator.geolocation.getCurrentPosition(
         (position) => {
         const pos = this.getRegionForCoordinates([{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
         }]);
         this.setState({
            region: {
               latitude: pos.latitude,
               longitude: pos.longitude,
               latitudeDelta: pos.latitudeDelta,
               longitudeDelta: pos.longitudeDelta,
            },
         });
         },
         (error) => alert(error.message),
         {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );

      this.watchID = navigator.geolocation.watchPosition((position) => {
         const pos = this.getRegionForCoordinates([{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
         }]);
         const newRegion = {
            latitude: pos.latitude,
            longitude: pos.longitude,
            latitudeDelta: pos.latitudeDelta,
            longitudeDelta: pos.longitudeDelta,
         }

         this.onRegionChange(newRegion);
      });
   }

   onRegionChange(region) {
      this.setState({ region });
   }

   render() {
      return (
         <View style={{height: this.props.height}}>
            <MapView
               ref="map"
               style={{flex: 1}}
               region={this.state.region}
               showsUserLocation
               onRegionChange={this.onRegionChange}
               provider={PROVIDER_GOOGLE}
               customMapStyle={mapStyle}
            >
            {
              this.props.coordinates ? 
              this.props.coordinates.map((coordinate, index) => (
                  <MapView.Marker
                    key={index}
                    coordinate={coordinate}
                  />
              ))
              :
              <View></View>
            }
            </MapView>
         </View>
      );
   }
}

export default AliveMap;