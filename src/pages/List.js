import React from 'react';
import { Button } from 'react-native';
import Container from '../components/Container';
import Footer from '../components/footer/Footer';
import ListText from './ListText';


export default function List({navigation}) {
  return (
    <Container>
      <ListText />
      <Footer>
        <Button title="Home" onPress={(Home) => navigation.navigate( 'Home' )} />
        <Button title="Menu" onPress={(Menu) => navigation.navigate( 'Menu' )} />
        <Button title="List" onPress={(List) => navigation.navigate( 'List' )} />
        <Button title="Form" onPress={(Form) => navigation.navigate( 'Form' )} />
      </Footer>
    </Container>
  )
}