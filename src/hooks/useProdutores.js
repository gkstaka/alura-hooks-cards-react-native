import {useState, useEffect} from 'react';
import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
    
    console.log(lista);
  }),
    [];
  console.log("sort")
  // lista.sort((a, b) => (a.distancia - b.distancia) );
  // create a sort by name lista
  lista.sort((a, b) => (a.nome > b.nome) ? 1 : -1)
  console.log(lista)
  return [titulo, lista];
}
