import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {carregaTopo, carregaProdutores} from '../../../servicos/carregaDados';
const logo = require('../../../assets/logo.png');

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({topo:retorno})
  }

  componentDidMount(): void {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#e6e6e6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: "#464646"
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: "#a3a3a3"
  },
});

export default Topo;
