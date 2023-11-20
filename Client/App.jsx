import { Provider } from 'react-redux';

import AppPage from './src/pages/AppPage';

import { store } from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <AppPage />
  </Provider>
);

export default App;
