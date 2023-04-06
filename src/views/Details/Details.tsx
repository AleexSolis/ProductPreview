import React, { FC, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import moment from 'moment';
import { useNavigation, CommonActions } from '@react-navigation/native';
import styles from './Details.styles';
import { useProductContext } from '../../context/ProductContext';
import { Button } from '../../components';

moment.defineLocale('es', null);

const Details: FC = () => {
  const { selectedProduct } = useProductContext();
  const navigation = useNavigation();

  if (!selectedProduct) {
    return (
      <View style={styles.container}>
        <Text>Not found</Text>
      </View>
    );
  }
  const date = moment(selectedProduct.createdAt, 'DD [de] MMMM, YYYY').format('DD [de] MMMM, YYYY');
  const formatPoints = new Intl.NumberFormat('en-US').format(selectedProduct.points);

  useEffect(() => {
    navigation.dispatch(CommonActions.setParams({ name: selectedProduct.product }));
  }, [selectedProduct.product]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedProduct.image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subTitles}>Compraste este producto</Text>
        <Text style={styles.date} testID="date">{`El ${date}`}</Text>
        <Text style={styles.subTitles}>Con esta compra acumulaste</Text>
        <Text style={styles.points}>{`${formatPoints} puntos`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Aceptar" onPress={navigation.goBack} />
      </View>
    </View>
  );
};

export default Details;
