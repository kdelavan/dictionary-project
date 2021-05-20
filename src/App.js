import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header"></header>
        <main>
          <Dictionary />
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
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
