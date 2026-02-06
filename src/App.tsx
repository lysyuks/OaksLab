import Header from './components/Header';
import JourneyPath from './components/JourneyPath';
import StationDetail from './components/StationDetail';
import ProjectContext from './components/ProjectContext';
import Footer from './components/Footer';
import { stations } from './data/stations';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <JourneyPath />
      {stations.map((station, i) => (
        <StationDetail key={station.id} station={station} isEven={i % 2 === 0} />
      ))}
      <ProjectContext />
      <Footer />
    </div>
  );
}

export default App;
