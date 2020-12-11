import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import firebase from './Firebase';

export default function AppLogin({ navigation }) {
  const [ mail, onChangeMail ] = useState('');
  const [ password, onChangePassword ] = useState('');
  const [ loading, onLoading ] = useState(false);
 
  const renderButton=(()=>{
    if (!loading) {
      return (
        <Button
        color="#3f68d1"
        title="Entrar"
        onPress={tryLogin}/>
      )
    } else {
      return (<ActivityIndicator/>)
    }   
  })

  const tryLogin =(() => {
 //   alert(mail);
 //   alert(password);
      onLoading(true);
//promisse
      firebase.auth().signInWithEmailAndPassword(mail, password)
      .then(user => {
        alert('Usuário logado com sucesso');
        navigation.navigate('AppList');
      })
      .catch(error => {
//        alert(error);
//        alert(error.code);
        if (error.code === 'auth/user-not-found') {
          onLoading(true);
          firebase.auth().createUserWithEmailAndPassword(mail, password)
          .then(user => {
            alert('Usuário cadastrado com sucesso');
            navigation.navigate('AppList');
          })
          .catch(error =>{
            alert('Não foi possível cadastrar o usuário');
            alert(error);
          })
          .finally(()=>onLoading(false));
        } else {
          alert(error);
        }
      })
      .finally(()=>onLoading(false));

});

const ref_input2 = useRef();

  return (
    /*<View>
        <TextInput placeholder="user@email.com"
        onChangeText = {texto => onChangeMail(texto)}
        />
        <TextInput placeholder="******"
        secureTextEntry
        onChangeText = {texto => onChangePassword(texto)}
        />
        { renderButton() }
       
    </View>*/
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Login</Text>
      {/* <Text style={styles.title}>Logar no Sistema</Text> */}
      <View style={styles.inputContainer}> 
        <Text>Email:</Text>
        <TextInput 
          style={styles.input} 
          autoFocus = {true}
          onChangeText={texto => onChangeMail(texto)} 
          placeholder="user@email.com"
          clearButtonMode="always"
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
          blurOnSubmit={false}
        /> 
        <Text>Senha:</Text>
        <TextInput 
          style={styles.input} 
          secureTextEntry
          onChangeText={texto => onChangePassword(texto)} 
          placeholder="******" 
          clearButtonMode="always"
          ref={ref_input2}
          returnKeyType="send"
          onSubmitEditing={tryLogin}
          /> 
          <TouchableOpacity style={styles.button} onPress={tryLogin}> 
            <View style={styles.buttonContainer}>
            <AntDesign name="login" size={22} color="white" />
              <Text style={styles.buttonText}>Login</Text> 
            </View>
          </TouchableOpacity> 
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputContainer: {
    flex: 1,
    marginTop: 20,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: "row"
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  }
});