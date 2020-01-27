import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.ScrollView``;

export const Form = styled.View`
   flex: 1;
   flex-direction: row;
   justify-content: space-between;
`;

export const SearchInput = styled(Input)`
   flex: 1;
   margin-right: 20px;
`;

export const SearchButtom = styled(Button)`
   width: 45px;
`;

export const List = styled.FlatList.attrs({
   showsVerticalScrollIndicator: false,
})`
   margin-top: 40px;
`;

export const User = styled.View`
   align-items: center;
   margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
   width: 64px;
   height: 64px;
   border-radius: 32px;
   background: #eee;
   border: 2px solid #17a2b8;
`;

export const Name = styled.Text`
   font-size: 16px;
   color: #fff;
   font-weight: bold;
   margin-top: 5px;
   text-align: center;
`;

export const Login = styled.Text`
   font-size: 14px;
   color: #eee;
   font-weight: bold;
   text-align: center;
`;

export const Bio = styled.Text.attrs({
   numberOfLines: 1,
})`
   font-size: 14px;
   line-height: 18px;
   color: #eee;
   margin-top: 5px;
   text-align: center;
`;

export const Location = styled.Text`
   flex-direction: row;
   justify-content: center;
   text-align: center;
   color: #eee;
`;

export const ProfileButtom = styled(Button)`
   margin-top: 10px;
   align-self: stretch;
`;
