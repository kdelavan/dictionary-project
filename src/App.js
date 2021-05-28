import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <main>
          <Dictionary defaultKeyword="ocean" />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://elegant-carson-775ffa.netlify.app/"
            target="_blank"
            title="My porfolio site"
            rel="noopener noreferrer"
          >
            Kathryn Delavan
          </a>{" "}
          - Open-sourced on{" "}
          <a
            href="https://github.com/kdelavan/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub{" "}
          </a>
          - Hosted with{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
