import styles from './App.module.css';
import Dropdown from './Component/dropdown';
import { options } from './Assets/data'; //options for dropdown list
function App() {

  return (
    <div className={styles.App}>
      {/* passing the options array as props to Dropdown component */}
      <h1>Reusable DropDown Component</h1>
      <Dropdown options={options}/>
    </div>
  );
}

export default App;
