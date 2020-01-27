import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
   colors: ['#24292e', '#1A3147'],
})`
   flex: 1;
   padding: 10% 5%;
`;
