import React, {useReducer, useState, useMemo} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Estrelas from '../../../componentes/Estrelas';

const distanciaEmMetros = (distancia: number) => { 
  console.log(`${distancia} distancia m`)
  return `${distancia}m`;
}

export default function Produtor({
  nome,
  imagem,
  distancia,
  estrelas,
}: {
  nome: string;
  imagem: string;
  distancia: number;
  estrelas: number;
}) {
  const [selecionado, inverterSelecionado] = useReducer((selecionado) => !selecionado,false);

  const distanciaTexto = useMemo(() => distanciaEmMetros(distancia), [distancia]);

  return (
    <TouchableOpacity
      style={estilos.cartao as ViewStyle}
      onPress={inverterSelecionado}>
      <Image
        source={imagem as ImageSourcePropType}
        accessibilityLabel={nome}
        style={estilos.imagem}
      />
      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
                  />
        </View>
        <Text style={estilos.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#e6e6e6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 4,
    shadowColor: '#000',
    //ios
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
