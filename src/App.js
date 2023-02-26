import "./App.css";
import Tweet from "./components/Tweet";
import {tweetsArray as tweet} from './data/data';



function App() {
  return (
    <div className="App">
      {tweetsArray.map(elem => {
        return <Tweet key={elem._id} tweet={elem} />
      })}

      <Tweet />
      <Tweet tweet={ tweetsArray[2] }></Tweet>
      
    </div>
  );
}

export default App;
