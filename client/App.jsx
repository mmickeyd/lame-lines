const {React} = window;
const {useState, useEffect} = React;

import axios from 'axios';

const App = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios.get('/filepath')
      .then(res => {
        setState(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      MY WEBPAGE
    </div>
  );
};

export default App;