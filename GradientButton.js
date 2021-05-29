/**
 * Props:
 *    'onPress' (function) = onPress functionality
 *    'style' (style object) = pretty much can only change 'borderRadius' and stuff
 *    'containerStyle' (style object) = adjusts 'margin' and 'padding' style things
 *    'labelStyle' (style object) = styles the button label/text
 *    'label' (string) (REQUIRED) = button label/text you want to show
 *    'size' (string) = 'sm', 'md' or 'lg' : changes amount of padding
 *    'color1' (string) = top color (color will be black without this prop)
 *    'color2' (string) = bottom color (color will be black without this prop)
 *    'color3' (string) = optional, adds third color below others
 *    'disabled' (boolean) = can set disabled or not
 *    'iconLeft' or 'iconRight' (boolean) = which side icon should be on
 *    'iconName' (string) = name of icon from 'MaterialCommunityIcons'
 *    'iconSize' (int) = size of icon
 *    'iconColor' (string) = color or icon
 *    'iconStyle' (style object) = adjust styling (paddings and such) of icon
 */

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

TouchableOpacity.defaultProps = { activeOpacity: 0.3 };

const Icon = ({ iconName, iconSize, iconColor, iconLeft, iconStyle, disabled }) => {
  let color = iconColor;
  if (disabled || iconColor === undefined) {
    color = 'white';
  }

  // default icon props config
  let hasIconName = true;
  let hasIconSize = true;
  if (iconName === undefined) {
    hasIconName = false;
  }
  if (iconSize === undefined) {
    hasIconSize = false;
  }

  return (
    <MaterialCommunityIcons
      style={
        iconLeft
          ? { ...iconStyle, ...styles.iconLeft }
          : { ...iconStyle, ...styles.iconRight }
      }
      name={hasIconName ? iconName : 'cog-outline'}
      size={hasIconSize ? iconSize : 22}
      color={color}
    />
  );
};

const GradientButton = props => {
  // set size as 'md' if no size prop given
  let { size } = props;
  if (props.size === undefined) {
    size = 'md';
  }

  // check if 2 or 3 colors are wanted
  let colors = [props.color1, props.color2];
  if (props.color3 !== undefined) {
    colors = [props.color1, props.color2, props.color3];
  }

  // set color to grey if 'disabled' is true
  if (props.disabled) {
    colors = ['#aeaeae', '#aeaeae'];
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={
        props.disabled
          ? { ...styles.disabled, ...props.containerStyle }
          : { ...styles.touchableContainer, ...props.containerStyle }
      }
      disabled={props.disabled}
    >
      <LinearGradient
        colors={colors}
        style={[
          {
            ...styles.defaultButtonContainer,
            ...props.style
          },
          size === 'sm' && { paddingVertical: 6, paddingHorizontal: 14 },
          size === 'md' && { paddingVertical: 10, paddingHorizontal: 18 },
          size === 'lg' && { paddingVertical: 14, paddingHorizontal: 20 }
        ]}
      >
        <View style={{ flexDirection: 'row' }}>
          {props.iconLeft ? (
            <Icon
              iconStyle={props.iconStyle}
              iconLeft={props.iconLeft}
              iconName={props.iconName}
              iconSize={props.iconSize}
              iconColor={props.iconColor}
              disabled={props.disabled}
            />
          ) : null}
          <Text
            style={[
              props.disabled
                ? styles.disabledButtonText
                : { ...styles.defaultButtonText, ...props.labelStyle },
              size === 'sm' && { fontSize: 12 },
              size === 'md' && { fontSize: 16 },
              size === 'lg' && { fontSize: 20 }
            ]}
          >
            {props.label}
          </Text>
          {props.iconRight ? (
            <Icon
              iconStyle={props.iconStyle}
              iconRight={props.iconRight}
              iconName={props.iconName}
              iconSize={props.iconSize}
              iconColor={props.iconColor}
              disabled={props.disabled}
            />
          ) : null}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    shadowColor: '#777',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    alignSelf: 'center'
  },
  defaultButtonContainer: {
    borderRadius: 10,
    alignItems: 'center'
  },
  defaultButtonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  disabledButtonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  disabled: {
    alignSelf: 'center'
  },
  iconLeft: {
    marginRight: 10
  },
  iconRight: {
    marginLeft: 10
  }
});

export default GradientButton;
