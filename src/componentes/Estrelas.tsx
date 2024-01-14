import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const estrela = require('../assets/estrela.png');
const estrelaCinza = require('../assets/estrelaCinza.png');

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);
  const estilos = estilosFuncao(grande);

  const getImage = (index: number) => {
    if (index < quantidade) {
      return estrela;
    }
    return estrelaCinza;
  };

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <TouchableOpacity
          key={i}
          disabled={!editavel}
          onPress={() => setQuantidade(i + 1)}>
          <Image source={getImage(i)} style={estilos.estrela} />
        </TouchableOpacity>,
      );
    }
    return listaEstrelas;
  };
  return (
    <View style={estilos.estrelas}>
      <RenderEstrelas />
    </View>
  );
}

const estilosFuncao = (grande: boolean) => {
  return StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
};
