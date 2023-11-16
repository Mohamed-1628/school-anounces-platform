import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Gaming = ({color}) => {
    return (
        <View>
            <Svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M15.6827 0C16.7887 0 17.6377 0.843 18.2667 1.75L18.4797 2.071L18.6747 2.391C18.7367 2.495 18.7957 2.599 18.8527 2.699C19.6397 4.106 20.3247 5.943 20.7777 7.758C21.2277 9.559 21.4767 11.44 21.3177 12.919C21.1577 14.404 20.3927 16 18.6827 16C17.1487 16 15.9397 15.18 14.9577 14.379L13.8477 13.448C12.9247 12.692 11.9147 12 10.6827 12C9.45074 12 8.43974 12.692 7.51874 13.448L6.40874 14.378C5.42474 15.18 4.21574 16 2.68274 16C0.971741 16 0.206741 14.404 0.0477411 12.919C-0.110259 11.439 0.137741 9.559 0.587741 7.757C1.04074 5.943 1.72574 4.107 2.51274 2.699L2.69074 2.39L2.88574 2.071L3.09874 1.75C3.72774 0.843 4.57674 0 5.68274 0C6.19274 0 6.69974 0.124 7.19774 0.27L7.79074 0.452C7.88874 0.482 7.98574 0.511 8.08274 0.538C8.94774 0.786 9.83274 1 10.6827 1C11.5327 1 12.4177 0.786 13.2827 0.538L14.1677 0.271C14.6657 0.124 15.1727 0 15.6827 0ZM7.18274 4C6.5197 4 5.88382 4.26339 5.41497 4.73223C4.94613 5.20107 4.68274 5.83696 4.68274 6.5C4.68274 7.16304 4.94613 7.79893 5.41497 8.26777C5.88382 8.73661 6.5197 9 7.18274 9C7.84578 9 8.48167 8.73661 8.95051 8.26777C9.41935 7.79893 9.68274 7.16304 9.68274 6.5C9.68274 5.83696 9.41935 5.20107 8.95051 4.73223C8.48167 4.26339 7.84578 4 7.18274 4ZM14.1827 4C13.9175 4 13.6632 4.10536 13.4756 4.29289C13.2881 4.48043 13.1827 4.73478 13.1827 5V5.5H12.6827C12.4175 5.5 12.1632 5.60536 11.9756 5.79289C11.7881 5.98043 11.6827 6.23478 11.6827 6.5C11.6827 6.76522 11.7881 7.01957 11.9756 7.20711C12.1632 7.39464 12.4175 7.5 12.6827 7.5H13.1827V8C13.1827 8.26522 13.2881 8.51957 13.4756 8.70711C13.6632 8.89464 13.9175 9 14.1827 9C14.448 9 14.7023 8.89464 14.8898 8.70711C15.0774 8.51957 15.1827 8.26522 15.1827 8V7.5H15.6827C15.948 7.5 16.2023 7.39464 16.3898 7.20711C16.5774 7.01957 16.6827 6.76522 16.6827 6.5C16.6827 6.23478 16.5774 5.98043 16.3898 5.79289C16.2023 5.60536 15.948 5.5 15.6827 5.5H15.1827V5C15.1827 4.73478 15.0774 4.48043 14.8898 4.29289C14.7023 4.10536 14.448 4 14.1827 4ZM7.18274 6C7.31535 6 7.44253 6.05268 7.53629 6.14645C7.63006 6.24021 7.68274 6.36739 7.68274 6.5C7.68274 6.63261 7.63006 6.75979 7.53629 6.85355C7.44253 6.94732 7.31535 7 7.18274 7C7.05013 7 6.92296 6.94732 6.82919 6.85355C6.73542 6.75979 6.68274 6.63261 6.68274 6.5C6.68274 6.36739 6.73542 6.24021 6.82919 6.14645C6.92296 6.05268 7.05013 6 7.18274 6Z" fill={color}/>
            </Svg>
        </View>
    )
}


export default Gaming