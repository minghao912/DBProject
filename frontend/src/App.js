import logo from './logo.svg';
import './App.css';

import GetSource from './components/getSource.tsx';
import CreateSource from './components/createSource.tsx';
import UpdateSource from './components/updateSource.tsx';

function App() {
  return (<div>
      <GetSource />
      <br />
      <CreateSource />
      <br />
      <UpdateSource />
    </div>
  );
}

export default App;
