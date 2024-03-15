import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Linking, separator} from 'react-native';


export default function App() {

  return (
    <View style={[styles.container, {flexDirection: 'row'} ]}>

      <View style={[styles.container, {backgroundColor: '#48d1cc'}]}>
        <View style={[styles.container, {flexDirection: 'row'}, {backgroundColor: '#48d1cc'} ]}>
          <Text style= {styles.white}>Ensino </Text> <Text style= {styles.whiteStrong}>Estácio.</Text>
          <Text style= {styles.white}>Brilhe com </Text> <Text style= {styles.whiteStrong}>+ tecnologia.</Text>
        </View>
   
        <Image source={{uri: 'https://sia.estacio.br/sianet/Content/SiteNovo/dist/img/banners/banner_01.png'}} style={{width: 479, height: 331}} />
        <StatusBar style="auto" />
      </View>


      <View style={styles.container}>
        <Image source={{uri: 'https://sia.estacio.br/sianet/Content/estacio/SiteNovo/dist/img/logos/logo-estacio-sia-v2.png'}} style={{width: 180, height: 46}} />
        <Text>SIA - Sistema de Informações Acadêmicas</Text>
        <Button
          title="Entrar com E-mail de estudante"
          onPress={() => Linking.openURL('https://login.microsoftonline.com')}
        />
        
        <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />
          

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white:{
    fontSize: 40,
    color: 'white'
  },
  whiteStrong:{
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
