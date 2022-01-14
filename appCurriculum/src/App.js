import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import photo from './assets/img/foto.jpg';
import Card from './components/Card';

const App = () => {
  function handleSocialMedias(social_media) {
    switch (social_media) {
      case 'linkedin':
        Alert.alert(
          'LinkedIn',
          'https://www.linkedin.com/in/mara-rúbia-alves-de-oliveira-910804181/',
        );
        break;
      case 'facebook':
        Alert.alert(
          'Facebook',
          'https://www.facebook.com/mararubia.oliveira.7',
        );
        break;
      case 'github':
        Alert.alert('Github', 'https://github.com/mararbia');
        break;
    }
  }

  return (
    <>
      <ScrollView>
        <View style={style.page}>
          <View style={style.container_header}>
            <Image source={photo} style={style.photo} />
            <Text style={style.name_profile}>MARA RÚBIA ALVES DE OLIVEIRA</Text>
            <Text style={style.profession}>Jr Software Developer</Text>
            <View style={style.social_medias}>
              <TouchableOpacity onPress={() => handleSocialMedias('github')}>
                <Icon name="github" size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSocialMedias('facebook')}>
                <Icon name="facebook" size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSocialMedias('linkedin')}>
                <Icon name="linkedin" size={30} />
              </TouchableOpacity>
            </View>
            <Card title="Formação Acadêmica">
              <Text style={style.card_content_text}>
                IFTM - Instituto Federal de Educação, Ciência e Tecnologia do
                Triângulo Mineiro
              </Text>
              <Text style={style.card_content_text}>
                DIO - Digital Innovatio One
              </Text>
            </Card>
            <Card title="Conhecimentos">
              <Text style={style.card_content_text}>HTML</Text>
              <Text style={style.card_content_text}>CSS</Text>
              <Text style={style.card_content_text}>Kotlin</Text>
              <Text style={style.card_content_text}>ReactJS</Text>
              <Text style={style.card_content_text}>React Native</Text>
              <Text style={style.card_content_text}>Javascript</Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 125,
  },
  container_header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  name_profile: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profession: {
    color: '#939393',
    marginBottom: 10,
  },
  social_medias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
