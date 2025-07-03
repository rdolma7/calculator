import "./App.css";

function App() {
  return (
    <>
      <div className="calculator-container">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="display">display</div>
        {/* calc logic */}
        <div className="buttons"></div>
      </div>
    </>
  );
}

export default App;
