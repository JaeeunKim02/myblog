import logo from './logo.svg';
import './App.css';
import FoodList from "./FoodList";
import CityList from "./CityList";

const styles = {
  list:{
    paddingLeft: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
};

function App() {

  return (
    <div className="App">
      <div className="black-nav">
        <h4>맛집 Blog</h4>
      </div>

      <h3 style={styles.list}>전국 맛집 인기순위</h3>
      <FoodList />
      <h3 style={styles.list}>주요 도시의 맛집</h3>
      <CityList />

    </div>
  );
}

export default App;
