import * as React from 'react';
import { View,Text,TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, StatusBar, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';


const Tela1Route = () => (
        <ImageBackground source={{ uri: 'https://assets.codepen.io/1468070/Roblox+Background.jpg' }} style={styles1.background}>
    <View style={styles1.container}>
        <Text style={styles1.title}>ROBLOX</Text>
        <TouchableOpacity style={styles1.button1} 
        >
          <Text style={styles1.buttonText1}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles1.button2} 
        >
          <Text style={styles1.buttonText2}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles1.forgotPasswordText}>Terms - Privacy?</Text>
    </View>
      </ImageBackground>
  );


const styles1 = StyleSheet.create({
    background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    width: '80%'
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  forgotPasswordText: {
    marginTop: 10,
    color: 'lightblue',
  },
});

const Tela2Route = () => (
   <ImageBackground source={{ uri: 'https://assets.codepen.io/1468070/Roblox+Background.jpg' }} style={styles2.background}>
      <View style={styles2.container}>
        <Text style={styles2.title}>ROBLOX</Text>
        <TextInput
          style={styles2.input1}
          placeholder="Username/Email/Phone"
        />
        <TextInput
          style={styles2.input2}
          placeholder="Password"
        />
        <TouchableOpacity style={styles2.button1} 
        >
          <Text style={styles2.buttonText1}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles2.button2} 
        >
          <Text style={styles2.buttonText2}>Log In With Another Device</Text>
        </TouchableOpacity>
          <TouchableOpacity  
        >
        <Text style={styles2.forgotPasswordText2}>Forgot Passoword or Username?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );


const styles2 = StyleSheet.create({
    background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    width: '80%'
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  input1: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '80%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'grey',
    color: 'grey'
  },
    input2: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '80%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'grey',
    color: 'grey'
  },

  forgotPasswordText2: {
    marginTop: 10,
    color: 'white',
    fontSize: 10,
  },
});



const Tela3Route = () => (
<ImageBackground source={{ uri: 'https://assets.codepen.io/1468070/Roblox+Background.jpg' }} style={styles3.background}>
          <View style={styles3.container2}>    
          <Text style={styles3.title}>ROBLOX</Text> 
          </View>
              <View>
    </View>
      <View style={styles3.card}>
      <View style={styles3.container}>
        <Text style={styles3.text2}>CADASTRE-SE E DIVIRTA-SE!</Text>
          <View style={styles3.containertext}>
          <Text style={styles3.text}>Data de nascimento</Text>
          </View>
          <View style={styles3.inputContainer}>
            <TextInput
              style={styles3.input}
              placeholder="Dia"
            />
            <TextInput
              style={styles3.input}
              placeholder="Mês"
            />
            <TextInput
              style={styles3.input}
              placeholder="Ano"
            />
          </View>
          <View style={styles3.containertext}>
          <Text style={styles3.text}>Usuário</Text>
          </View>
          <TextInput
          style={styles3.input1}
          placeholder="Não use seu nome real"
        />
          <View style={styles3.containertext}>
          <Text style={styles3.text}>Senha</Text>
          </View>
        <TextInput
          style={styles3.input2}
          placeholder="Mínimo de 8 caracteres"
        />
          <View style={styles3.containertext}>
          <Text style={styles3.text}>Gênero (opcional)</Text>
          </View>
          <View style={styles3.buttonContainer}>
            <TouchableOpacity style={styles3.button1}>
              <Text style={styles3.buttonText1}>
              <Icon name="female"  size={20} color="white" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles3.button1}>
              <Text style={styles3.buttonText1}>
              <Icon name="male"  size={20} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles3.forgotPasswordText}>Ao clicar em Cadastrar-se, você aceita os Termos de Uso 
          (incluindo a cláusula de arbitragem) e a Política de Privacidade.</Text>

          <TouchableOpacity style={styles3.button3}>
            <Text style={styles3.buttonText3}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
);
const styles3 = StyleSheet.create({
background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    backgroundColor: '#222427',
    borderRadius: 10,
    margin: 20,
    marginBottom: 100,
    marginTop: 100,
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
    containertext: {
    width: 230,
    alignItems: 'left',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 50,
    color: 'white',
  },
  text: {
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'column'
  },
    text2: {
    color: 'white',
    alignItems: 'Center',
    marginBottom: 30,
    flexDirection: 'column'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    padding: 10,
    width: '30%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: 'lightgrey',
    backgroundColor:'black',
  },
  input1: {
    padding: 10,
    margin: 10,
    width: '105%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: 'lightgrey',
    backgroundColor:'black',
  },
    input2: {
    padding: 10,
    margin: 10,
    width: '105%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: 'lightgrey',
    backgroundColor:'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  button1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'black',
    padding: 10,
    width: '70%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center,'
  },
  buttonText1: {
    fontSize: 16,
    color: 'grey',
  },

  forgotPasswordText: {
    marginTop: 10,
    color: 'lightgrey',
    fontSize: 10,
  },
    button3: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    padding: 10,
    width: '55%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginTop: 20,
  },
  buttonText3: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 500,
  },
});


const Tela4Route = () => (
    <View style={styles4.container}>
      <View style={styles4.titleContainer}>
        <Text style={styles4.title}>Esqueceu a senha ou nome de usuário
        </Text>
      </View>
      <Card style={styles4.card}>
        <View style={styles4.imageContainer}>
          <Image source={('https://cdn-icons-png.flaticon.com/512/1483/1483769.png')} style={styles4.image} />
        </View>
        <Text style={styles4.textborder}>
          Se você não nos forneceu um endereço de e-mail real ao criar a sua conta, não poderemos lhe enviar um e-mail de recuperação.
        </Text>
        <Text style={styles4.text}>
          Insira seu e-mail para redefinir sua senha.
        </Text>
        <TextInput
          style={styles4.input}
          placeholder="E-mail"
        />
        <TouchableOpacity style={styles4.button} >
          <Text style={styles4.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <Text style={styles4.text}>
          Usar número de telefone para redefinir a senha
        </Text>
      </Card>
    </View>
  );
 
const styles4 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textborder: {
    margin: 24,
    fontSize: 9.5,
    borderWidth: 1,
    borderColor: 'orange',
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
  },
  text: {
    margin: 10,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 16,
    marginHorizontal: 16,
  },
  input: {
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    color: '#ccc',
  },
  button: {
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
  buttonText: {
    color: '#ccc',
    fontSize: 15,
  },
});



const renderTabBar = props => (
  <TabBar
    {...props}
    tabStyle={{ flexDirection: 'row' }}
    style={{ backgroundColor: '#171A21' }}
  />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Sign' },
      { key: 'second', title: 'Log In' },
      { key: 'third', title: 'Sign in' },
       { key: 'fourth', title: 'Forgot' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Tela1Route,
          second: Tela2Route,
          third: Tela3Route,
          fourth: Tela4Route,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
        renderTabBar={renderTabBar}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});


