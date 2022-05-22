import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';


const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          
          <Card> <Card.Title>Motorola (2020)</Card.Title>
          <Text style={styles.paragraph}>
          Testes de novos dispositivos móveis da Motorola.
          Acompanhamento dos produtos em lançamento.
          </Text>
        </Card>
        <Card> <Card.Title>Ministério Público de Pernambuco (2017)</Card.Title>
        <Text style={styles.paragraph}>
        Assessória da Comunicação. Comunicação Interna.</Text></Card>
          <Button title="Retornar" onPress={() => navigation.goBack()} />
 
          <Button
            title="Extras"
            onPress={() => navigation.navigate('ThirdPage', { someParam: 'Param1' })}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default SecondPage;