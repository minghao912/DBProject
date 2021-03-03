import logo from './logo.svg';
import './App.css';

import GetSource from './components/getSource.tsx';
import GetAllSources from './components/getAllSources.tsx';
import CreateSource from './components/createSource.tsx';
import UpdateSource from './components/updateSource.tsx';

function App() {
  return (<div>
      <GetSource />
      <br />
      <CreateSource />
      <br />
      <UpdateSource />
      <br />
      <GetAllSources />
    </div>
  );
}

export default App;
