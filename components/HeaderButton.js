// Special button that is displayed in the header of certain screens set up by react-navigation

import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import colors from '../assets/colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={colors.primary}
    />
  );
};

export default CustomHeaderButton;