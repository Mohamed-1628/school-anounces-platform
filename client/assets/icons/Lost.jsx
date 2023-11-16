import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Lost = ({color}) => {
  return (
    <View>
      <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <Path
          d="M9.73649 8.72977C8.65052 9.92878 8.04043 11.5507 8.0393 13.2418V9.80873H2.67977V13.7322H8.0393V13.2418C8.0393 14.0755 8.19116 14.9093 8.48593 15.694H0.893256V9.80873H0V7.84698L0.893256 2.94262H15.1854L15.9803 7.31731C14.9281 6.85445 13.7752 6.74156 12.665 6.9927C11.5548 7.24384 10.5364 7.84792 9.73649 8.72977ZM15.1854 0H0.893256V1.96175H15.1854V0ZM20 18.6366L18.7584 20L15.9714 16.9887C15.3551 17.4105 14.6226 17.6557 13.8455 17.6557C11.6123 17.6557 9.82582 15.694 9.82582 13.2418C9.82582 10.7896 11.6123 8.82786 13.8455 8.82786C16.0786 8.82786 17.8651 10.7896 17.8651 13.2418C17.8651 14.105 17.6418 14.9191 17.2488 15.5959L20 18.6366ZM16.0786 13.2418C16.0786 12.5914 15.8433 11.9677 15.4245 11.5078C15.0057 11.048 14.4377 10.7896 13.8455 10.7896C13.2532 10.7896 12.6852 11.048 12.2664 11.5078C11.8476 11.9677 11.6123 12.5914 11.6123 13.2418C11.6123 13.8921 11.8476 14.5159 12.2664 14.9757C12.6852 15.4356 13.2532 15.694 13.8455 15.694C14.4377 15.694 15.0057 15.4356 15.4245 14.9757C15.8433 14.5159 16.0786 13.8921 16.0786 13.2418Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default Lost;
