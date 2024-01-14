import React from 'react';
import {Text} from 'react-native';
// import Topo from "../componentes/Topo";
import Topo from './componentes/Topo';
import Produtores from './componentes/Produtores';

export default function Home() {
  return (
    <>
      <Produtores topo={Topo} />
    </>
  );
}
