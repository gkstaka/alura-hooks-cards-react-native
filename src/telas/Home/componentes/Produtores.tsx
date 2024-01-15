import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
// import {carregaProdutores} from '../../../servicos/carregaDados';
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';
export default function Produtores({topo: Topo}: {topo: React.ComponentType}) {
  // const [titulo, setTitulo] = useState('');
  // // const [lista, setLista] = useState([]);
  // const [lista, setLista] = useState<
  //   {nome: string; imagem: any; distancia: string; estrelas: number}[]
  // >([]);

  // useEffect(() => {
  //   const retorno = carregaProdutores();
  //   setTitulo(retorno.titulo);
  //   setLista(retorno.lista);
  //   console.log(lista);
  // }),
  //   [];

  const [titulo, lista] = useProdutores();

  const topoLista = () => {
    return (
      <>
        <Topo />
        <Text style= {estilos.titulo}>{titulo}</Text>
      </>
    );
  };
  // return <Text>{ titulo}</Text>;
  return (
    <FlatList
      data={lista}
      keyExtractor={({nome}) => nome}
        renderItem={({ item }) =>  <Produtor {...item} /> }
      ListHeaderComponent={topoLista}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    margin: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
