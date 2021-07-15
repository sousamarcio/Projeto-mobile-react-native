import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';

import Rotas from './src/rotas';
import TelaPadrao from './src/componentes/TelaPadrao';

Reactotron.configure().useReactNative().connect();

export default function App() {
  return <TelaPadrao><Rotas /></TelaPadrao>;
}