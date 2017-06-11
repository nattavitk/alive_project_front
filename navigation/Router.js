import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

import StartScreen from '../screens/StartScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import JourneyCard from '../components/JourneyCard';
import JourneyList from '../components/JourneyList';
import Board from '../screens/Board';
import CreateScreen from '../screens/CreateScreen';
import DiscoveryDetail from '../screens/DiscoveryDetail';

export default createRouter(() => ({
  start: () => StartScreen,
  links: () => LinksScreen,
  create: () => CreateScreen,
  settings: () => SettingsScreen,
  discovery: () => DiscoveryScreen,
  journeyCard: () => JourneyCard,
  journeyList: () => JourneyList,
  board: () => Board,
  discoveryDetail: () => DiscoveryDetail,
  rootNavigation: () => RootNavigation,
}));
