import './App.css';
import {useState, useEffect} from 'react'; 

const URL = 'http://localhost/json_lista/index.php';

function App() {
  const [names,setNames] = useState([]);

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then (
      (res) => {
        setNames(res);
      },
      (error) => {
        alert(error);
      }
    )
  },[])

  return (
    <div style={{padding: 30}}>
      <h3>Names</h3>
      <ol>
      { names.map(person => (
          <li>{person.lastname}, {person.firstname}, {person.sposti}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
