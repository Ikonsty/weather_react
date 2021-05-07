import React from 'react';
import './App.css';

const api = {
    key: "3b664d7b2be3153ce24c52b8344dfe1c",
    base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
        <main>
          <div className="search-box">
            <input type="text"
            class="search-bar"
            placeholder="Search..."/>
          </div>

          <div>
          </div>
        </main>
    </div>
  );
}

export default App;
