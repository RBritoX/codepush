import React from 'react';

import Background from '~/Styles/Background';
import {Container} from './styles';

export default function Profile() {
   return (
      <Background>
         <Container></Container>
      </Background>
   );
}

Profile.navigationOptions = {
   title: 'Perfil',
};
