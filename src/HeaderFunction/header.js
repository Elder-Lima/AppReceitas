import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";

import logo from '../imagens/logo.png';


function Header() {
    return(
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={"#121212"} barStyle="light-content" transLucent={false} />
    
          <View
            style={{
              width: '100%',
              height: 70,
              padding: 10,
              backgroundColor: "#fff",
              marginBottom: 20
              
            }}
            > 
              
              <Image style={styles.logo} source={`${logo}`} />
              
              <Text style={styles.headerText}>Receitas</Text>
    
          </View>
        </View>
    );

};
const styles = StyleSheet.create({
  
  headerText: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#ffbc0d',
      marginTop: 5
  },
  
  logo: {
      width: 50,
      height: 50,
      flexDirection: "row",
      position: 'absolute',
      marginLeft: 20,
      marginTop: 10
  },

});


export default Header;