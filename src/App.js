import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

    </div>

  );
}

export default App;
