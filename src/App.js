import Navbar from "./Navbar";
import Shop from "./Shop";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="container my-3">
          <Shop />
        </div>
      </div>
    </>
  );
}

export default App;
