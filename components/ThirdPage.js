import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet  } from 'react-native';
import { Card } from 'react-native-elements';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          { route.params.someParam != 'reset' ?
            <Button title="Retornar" onPress={() => navigation.goBack()} />
            :null
          }
          <Card> <Card.Title>Educação</Card.Title>
          <Text style={styles.paragraph}>
          Comunicação Social (2014): Completo.
          Sistemas para Internet (2020): Em andamento.
          </Text>
        </Card>
           <Card> <Card.Title>Cursos</Card.Title>
          <Text style={styles.paragraph}>
          Marketing Digital. Introdução a Ciência da Computação. 
Curso Online de Teste De Software. Estrutura e Funcionamento das Redes de Computadores. Fundamentos do Suporte Técnico.
          </Text>
        </Card>

          <Button
            title="Voltar para Introdução"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'FirstPage',
                    params: { someParam: 'reset' },
                  },
                ],
              })
            }
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

export default ThirdPage;