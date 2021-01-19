import React from 'react';
import { SafeAreaView, View, Text, Button, Image } from 'react-native';
import Container from '../components/Container';

import TopContainer from '../components/menu/TopContainer';
import MenuNameCotaner from '../components/menu/MenuNameCotaner';
import UserContainer from '../components/menu/UserContainer';
import UserImgContainer from '../components/menu/UserImgContainer';
import UserTextContainer from '../components/menu/UserTextContainer';
import MdContainer from '../components/menu/MdContainer';
import SettingContainer from '../components/menu/SettingContainer';


import Footer from '../components/footer/Footer';
import FooBts from '../components/footer/FooBts';

const Menu = ({navigation}) => {
  return (
    <Container>
      <Container>
        <TopContainer>
          <MenuNameCotaner>
            <Text></Text>
          </MenuNameCotaner>
          <UserContainer>
            <UserImgContainer>

            </UserImgContainer>
            <UserTextContainer>
              <Text style={{fontSize: 18}}>길동님의 마이페이지</Text>
            </UserTextContainer>
          </UserContainer>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:1}}></View>
            <View style={{height:10, width:50, marginRight:20, backgroundColor: '#5c5a61'}}></View>
          </View>
        </TopContainer>
        <MdContainer>
          <SettingContainer>
            <View style={{backgroundColor: 'blue'}}>
              <View style={{marginTop: 30, height: 11, width: 60, marginBottom: 22, backgroundColor: 'green'}}>
                <Text>알림방식</Text>
              </View>
              <View>
                <Text>소리</Text>
              </View>
              <View>
                <Text>진동</Text>
              </View>
              <View>
                <Text>소리+진동</Text>
              </View>
            </View>
            <View>
              <View>
                <Text>탐지민감도</Text>
              </View>
              <View>
                <Text>보통</Text>
              </View>
              <View>
                <Text>강하게</Text>
              </View>
              <View>
                <Text>아주강하게</Text>
              </View>
            </View>
            <View>
              <View>
                <Text>탐지대상</Text>
              </View>
              <View>
                <Text>모든번호</Text>
              </View>
              <View>
                <Text>모르는번호</Text>
              </View>
            </View>
          </SettingContainer>
        </MdContainer>
      </Container>
      <Footer>
        <FooBts title="Home" style={{marginLeft: 92}} onPress={(Home) => navigation.navigate( 'Home' )}>
          <Image source={require('../img/homeOff/HOME_ICON.png')} />
        </FooBts>
        <View style={{flex:1}} />
        <FooBts title="Menu" style={{marginRight: 92}} onPress={(Menu) => navigation.navigate( 'Menu' )}>
          <Image source={require('../img/menuOn/MENU_ICON_C.png')} />
        </FooBts>
      </Footer>
    </Container>
  )
}

export default Menu;