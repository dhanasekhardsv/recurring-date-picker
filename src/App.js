import { Provider } from 'react-redux';
import './App.css';
import RecurringDatePicker from './pages/RecurringDatePicker/RecurringDatePicker';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <RecurringDatePicker />
    </Provider>
  );
}

export default App;
