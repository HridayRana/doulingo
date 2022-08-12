import React from "react";
import Home from "../screens/Home";
import TabNavigator from "./TabNavigator";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
   return(
       <BottomTab.Navigation>
            <BottomTab.Screen name="Tab" component={TabNavigator} />
            <BottomTab.Screen name="Home" component={Home} />
       </BottomTab.Navigation>



   );
};

export default BottomTabNavigator;