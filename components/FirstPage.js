import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
  <View style={styles.container}>
             <Image source={{ uri: "https://scontent.ffor17-1.fna.fbcdn.net/v/t1.6435-9/71739031_2528960730523518_3289429982157209600_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=zd1QocG7CZAAX8Dxwy7&tn=71F_wQMxY9Cmi1RD&_nc_ht=scontent.ffor17-1.fna&oh=00_AT-USKk127tfLlOTRhN8Xbttvs1XZUpX0XXysY9yrQQBfA&oe=62A2CC51" }} style={styles.photo} />
 
      <Text style={styles.title}> Pedro Morosini</Text>
      <Text style={styles.paragraph}> Bacharel em Jornalismo pela Universidade Católica de Pernambuco e atualmente cursando Sistemas da Internet. Profissional com experiência e conhecimento em áreas jornalísticas. Experiente em redação, reportagens, entrevistas, traduções, produção de conteúdo digital para redes sociais, planejamento de estratégias e ações e cobertura de eventos.</Text> 
          <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Experiências"
          />
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
    marginTop: 20,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 1000,
  },
  title:{
    margin:14,
    fontsize:18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph:{
    margin:4,
    fontsize:14,
    textAlign: 'center',
  }
});

export default FirstPage;
