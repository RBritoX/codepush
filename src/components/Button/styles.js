import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
   height: 40px;
   background: #17a2b8;
   border-radius: 5px;
   align-items: center;
   justify-content: center;
`;

export const Text = styled.Text`
   color: #fff;
   font-weight: bold;
   font-size: 50px;
`;
