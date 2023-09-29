import "./App.css";
import { useState, useEffect } from "react";
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { TrackList } from "./components/TrackList/TrackList";

function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 5000);

      return () => clearTimeout(timer);
    }

    console.log(isLoading);
  }, [isLoading]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <NavMenu />
            <TrackList isLoading={isLoading} />
            <Sidebar isLoading={isLoading} />
          </main>
          <AudioPlayer isLoading={isLoading}/>
          <footer className="footer" />
        </div>
      </div>
    </div>
  );
}

export default App;
