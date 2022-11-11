import "./App.css";
// responsive 
/* 
# Mobile
only screen and (min-width: 480px)

# Tablet
only screen and (min-width: 768px) 

# Desktop
only screen and (min-width: 992px)

# Huge
only screen and (min-width: 1280px) 
Or:

# Phone
only screen and (max-width:320px)

# Tablet
only screen and (min-width:321px) and (max-width:768px)

# Desktop
only screen and (min-width:769px)
*/

function App() {
  return (
    <div className="App">
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button>
    </div>
  );
}

export default App;
