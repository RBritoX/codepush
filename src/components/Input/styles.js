import styled from 'styled-components/native';

export const Container = styled.View`
   padding: 0 16px;
   height: 40px;
   background: rgba(62, 68, 72, 0.8);
   border-radius: 5px;
   flex-direction: row;
   align-items: center;
`;

export const TInput = styled.TextInput.attrs({
   placeholderTextColor: 'rgba(137, 140, 143, 0.8)',
})`
   flex: 1;
   font-size: 16px;
   font-weight: bold;
   margin-left: 10px;
   color: #bbb;
`;
