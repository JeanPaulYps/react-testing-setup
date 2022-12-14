import logo from "./logo.svg";
import "./App.css";
import { Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Dialog onClose={() => setOpen(prevOpen => !prevOpen)} open={open}>
          <DialogTitle>Set backup account</DialogTitle>
        </Dialog>
      </header>
    </div>
  );
}

export default App;
