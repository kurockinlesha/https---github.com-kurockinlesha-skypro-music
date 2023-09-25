import "./App.css";
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { TrackList } from "./components/TrackList/TrackList";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <NavMenu />
            <TrackList />
            <Sidebar />
          </main>
          <AudioPlayer />
          <footer className="footer" />
        </div>
      </div>
    </div>
  );
}

export default App;
