import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Leaderboard from './components/Leaderboard';
import AddScoreModal from './components/AddScoreModal';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Leaderboard />
        <AddScoreModal />
      </div>
    </Provider>
  );
};

export default App;
