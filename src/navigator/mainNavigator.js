import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen010373Navigator from '../features/BlankScreen010373/navigator';
import BlankScreen110372Navigator from '../features/BlankScreen110372/navigator';
import BlankScreen110366Navigator from '../features/BlankScreen110366/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen010373: { screen: BlankScreen010373Navigator },
BlankScreen110372: { screen: BlankScreen110372Navigator },
BlankScreen110366: { screen: BlankScreen110366Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
