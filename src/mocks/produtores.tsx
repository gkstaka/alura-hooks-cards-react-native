const green = require('../assets/produtores/green.png');
const grow = require('../assets/produtores/grow.png');
const jennyJack = require('../assets/produtores/jenny-jack.png');
const potager = require('../assets/produtores/potager.png');
const salad = require('../assets/produtores/salad.png');

const rng = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
    titulo: 'Produtores',
    lista: [
        {
            nome: 'Green',
            imagem: green,
            distancia: rng(1,500),
            estrelas: rng(1, 5),
        },
        {
            nome: 'Grow',
            imagem: grow,
            distancia: rng(1,500),
            estrelas: rng(1, 5),
        },
        {
            nome: 'Jenny Jack Farm',
            imagem: jennyJack,
            distancia: rng(1,500),
            estrelas: rng(1, 5),
        },
        {
            nome: 'Potager',
            imagem: potager,
            distancia: rng(1,500),
            estrelas: rng(1, 5),
        },
        {
            nome: 'Salad',
            imagem: salad,
            distancia: rng(1,500),
            estrelas: rng(1, 5),
        },
    ],
};

export default produtores;