import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';

import AliveMap from '../components/AliveMap';
import { MonoText } from '../components/StyledText';

import JourneyList from '../components/JourneyList';

export default class StartScreen extends React.Component {

  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
    this.onPressJourneyCard = this.onPressJourneyCard.bind(this);
  }

  onPressButton() {
    this.props.navigator.push('create');
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
      <ScrollView 
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}
      >
        <AliveMap
          height={400}
        />
        <View style={{alignItems: 'center'}}>
          <TouchableHighlight onPress={this.onPressButton}>
            <Image
              style={styles.button}
              source={require('../assets/icons/Create button.png')}
            />
          </TouchableHighlight>
        </View>
        <Text style={styles.title}>   Nearby journeys</Text>
        <View>
          
          <JourneyList onPressJourneyCard={this.onPressJourneyCard}/>
        </View>
      </ScrollView>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will run slightly slower but
          you have access to useful development tools. {learnMoreButton}.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 140,
    height: 38,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    flex: 1,
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
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#F08A38',
  },
  button: {
    height: 40,
    width: 253,
    marginTop: -60,
  },
  title: {
    marginVertical: 10,
  },
});
