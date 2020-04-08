import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const Component = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function YourApp() {
  return (
    <Component>
      <Text>First React Native Experiemnt</Text>
    </Component>
  );
}
