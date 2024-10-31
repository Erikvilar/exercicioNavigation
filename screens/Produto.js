import {
  Text,
  FlatList,
  ScrollView,
  Image,

  TouchableOpacity,
} from 'react-native';


import Produtos from '../components/produtos.jsx';

export default function Produto({ navigation }) {
  
  return (
    <ScrollView style={{ backgroundColor: '#F5F5F7' }}>

   
       
      <FlatList
        style={{ height: 'auto' }}
        data={Produtos}
        alignItems="center"
        scrollEnabled={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detalhes do produto')}
            style={{
              borderRadius: 20,
              height: 300,
              marginBottom: 50,
              marginTop: 20,
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
            }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 300, height: 180 }}
            />
            <Text style={{ paddingLeft: 20, paddingTop: 20, fontWeight: 700 }}>
              {item.name}
            </Text>
            <Text style={{ paddingLeft: 20, fontWeight: 700 }}>
              {item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}
