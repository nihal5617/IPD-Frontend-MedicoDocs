import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../../../styles/colors';
import global from '../../../utility/global';
import constants from '../../../utility/constants';
import CommonInput from '../../../components/CommonInput';
import {useForm} from 'react-hook-form';
import PrimaryButton from '../../../components/PrimaryButton';
import fonts from '../../../utility/fonts';
import Header from '../../../components/Header';
import SearchBox from '../../../components/SearchBox';

export default function News({navigation}) {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    setLoading(true);
    navigation.setOptions({
      header: () => <Header />,
    });
    console.log(isLoading)
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=1429c314999546d58a4e13c5894a04f5',
    )
      .then(response => response.json())
      .then(json => {
        setNewsData(json.articles);
      })
      .catch(error => console.error(error));
    setLoading(false);
  }, []);

  //   {
  //     "source":{
  //        "id":"the-washington-post",
  //        "name":"The Washington Post"
  //     },
  //     "author":"Ariana Eunjung Cha",
  //     "title":"Why a 'tripledemic' is keeping many of us sick for weeks at a time - The Washington Post",
  //     "description":"It’s like ‘a big bomb of viruses went off,' says pediatrician treating kids with flu, RSV, strep and covid",
  //     "url":"https://www.washingtonpost.com/health/2022/12/15/tripledemic-covid-rsv-flu-surge/",
  //     "urlToImage":"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TZMO5F3UF7A45BJ6365LB6ABRY.JPG&w=1440",
  //     "publishedAt":"2022-12-15T14:00:00Z",
  //     "content":"Comment on this story\r\nIt started in mid-September with Vance, 5, who came down with RSV and wheezed so badly that his skin was pulling in and out of his ribs with every breath. His little brother Ba… [+14143 chars]"
  //  },

  const renderNewsItem = ({item}) => {
    return (
      <Ripple
        style={{
          flex: 1,
          flexDirection: 'row',
          elevation: 1,
          marginVertical: 5,
          backgroundColor: colors.WHITE,
          padding: 10,
          borderRadius: 5,
        }}
        // open news in browser
        onPress={() => global.openUrl('https://google.com')}>
        <View style={{flex: 0.4, flexDirection: 'column'}}>
          <Image
            source={{uri: item.urlToImage}}
            style={{width: 100, height: 100, borderRadius: 5}}
          />
          <Text style={{fontSize: 14, marginTop: 10, color: colors.BLACK}}>
            {item.source.name}
          </Text>
          <Text>{global.getTimeDifference(item.publishedAt)}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
          <Text style={{fontSize: 16, fontWeight: '700', color: colors.BLACK}}>
            {item.title}
          </Text>
          <Text style={{fontSize: 14, marginTop: 10, color: colors.BLACK}}>
            {item.description}
          </Text>
        </View>
      </Ripple>
    );
  };

  return (
    <View style={internalstyles.container}>
      {isLoading && global.getLoader()}
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={item => item.url}
      />
    </View>
  );
}

const internalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    padding: 10,
  },
});
