import { useEffect } from "react";

function App() {
  useEffect(()=>{
    document.title = 'Memory Game';
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
