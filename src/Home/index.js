import { ImageBackground } from "react-native";
import { View, StatusBar, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";

import bolo from '../imagens/bolo.png'

import lasanha from '../imagens/lasanha.png'
import paodequeijo from '../imagens/paodequeijo.jpg'
import pudim from '../imagens/pudim.jpg'
import strogonoff from '../imagens/strogonoff.jpg'

function HomeScreen({ navigation }) {
  const data = [
    { id: '1', title: 'Bolo de Chocolate', photos: `${bolo}`, subT: '11 ingredientes | 45 min', name: 'BoloDeChocolate' },
    { id: '2', title: 'Lasanha', photos: `${lasanha}`, subT: '14 ingredientes | 50 min', name: 'Lasanha'},
    { id: '3', title: 'Pão de Queijo', photos: `${paodequeijo}`, subT: '7 ingredientes | 40 min', name: 'Paodequeijo' },
    { id: '4', title: 'Pudim', photos: `${pudim}`, subT: '4 ingredientes | 1h 50 min', name: 'Pudim' },
    { id: '5', title: 'Strogonoff de Frango', photos: `${strogonoff}`, subT: '12 ingredientes | 1h', name: 'Strogonoff' },
  ];

  return (
    

    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#121212"} barStyle="light-content" transLucent={false} />

      <View
        style={{
          width: '100%',
          height: 70,
          padding: 10,
          backgroundColor: "#fff",
          
          
          
        }}
        > 
          
          <Image style={styles.logo} source={require('../imagens/logo.png')} />
          
          <Text style={styles.headerText}>Receitas</Text>

      </View>
      
      <FlatList
        
        data={data}
        keyExtractor={(item) => item.id }
        showVerticalScrollIndicator={false}
        renderItem= { ({ item }) => (
          <View style={styles.item}>

           
            <TouchableOpacity onPress={() => navigation.navigate(`${item.name}`)}>
              <ImageBackground style={styles.imagemF}  source={item.photos}> 
                <Text style={styles.titulo}>{item.title}</Text>
                <Text style={styles.subtitulo}>{item.subT}</Text>
              </ImageBackground>

            </TouchableOpacity>
            
          </View>  
        )}
      />

    </View>

  )
}


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
    
  item: {
      height: 200,
      marginTop: 30,
      
    },
    
    titulo: {
        marginTop: '30%',
        marginLeft: 30,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
        
    },
    
    subtitulo: {
        marginTop: 10,
        marginLeft: 30,
        color: '#fff',
        fontSize: 12
    },
    
    imagemF: {
        overflow: "hidden",
        height: 200,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    
}

});

export default HomeScreen;