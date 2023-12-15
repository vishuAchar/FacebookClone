import React, {useEffect} from 'react';
import Header from '../components/Header';
import TopTabBar from '../navigation/TopTabbar';

const MainScreen = ({navigation}) => {
  return (
    <>
      <Header />
      <TopTabBar navigation={navigation} />
    </>
  );
};

export default MainScreen;
