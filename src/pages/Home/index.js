import React, {Component} from 'react';
import {Keyboard} from 'react-native';

import api from '~/services/api';
import Icon from 'react-native-vector-icons/FontAwesome';

import Background from '~/Styles/Background';
import {
   Container,
   Form,
   SearchInput,
   SearchButtom,
   List,
   User,
   Avatar,
   Name,
   Login,
   Bio,
   Location,
   Text,
   ProfileButtom,
} from './styles';

export default class Home extends Component {
   state = {
      newUser: '',
      users: [],
   };

   handleAddUser = async () => {
      const {users, newUser} = this.state;

      const res = await api.get(`/users/${newUser}`);

      const data = {
         name: res.data.name,
         login: res.data.login,
         bio: res.data.bio,
         avatar: res.data.avatar_url,
         location: res.data.location,
      };

      console.log('Data: ', data);

      this.setState({
         users: [...users, data],
         newUser: '',
      });

      Keyboard.dismiss();
   };

   render() {
      const {users, newUser} = this.state;

      return (
         <Background>
            <Container>
               <Form>
                  <SearchInput
                     icon="github"
                     keyboardType="email-address"
                     autoCorrect={false}
                     autoCapitalize="none"
                     placeholder="Digite um usuário do GitHub"
                     returnKeyType="send"
                     onSubmitEditing={this.handleAddUser}
                     onChangeText={text => this.setState({newUser: text})}
                  />
                  <SearchButtom onPress={this.handleAddUser}>
                     <Icon name="search" size={15} />
                  </SearchButtom>
               </Form>

               <List
                  data={users}
                  keyExtractor={user => user.login}
                  renderItem={({item}) => (
                     <User>
                        <Avatar source={{uri: item.avatar}} />
                        <Name>{item.name}</Name>
                        <Login>{item.login}</Login>

                        {item.bio !== null && <Bio>{item.bio}</Bio>}

                        {item.location !== null && (
                           <Location>
                              <Icon name="map-marker" size={16} />{' '}
                              {item.location}
                           </Location>
                        )}
                        <ProfileButtom onPress={() => {}}>
                           <Icon name="github" size={20} />
                        </ProfileButtom>
                     </User>
                  )}
               />
            </Container>
         </Background>
      );
   }
}

Home.navigationOptions = {
   title: 'GitHub',
};
