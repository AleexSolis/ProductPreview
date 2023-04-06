import React, { FC } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Details.styles';
import { useProductContext } from '../../context/ProductContext';

const Details: FC = () => {
  const { selectedProduct } = useProductContext();
  if (!selectedProduct) {
    return (
      <View style={styles.container}>
        <Text>Not found</Text>
    </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedProduct.image }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{selectedProduct?.product}</Text>
        <Text style={styles.points}>{`${selectedProduct.points} puntos`}</Text>
        <Text style={styles.createdAt}>{`Creado el ${new Date(
          selectedProduct.createdAt
        ).toLocaleDateString()}`}</Text>
      </View>
    </View>
  );
};

export default Details;
