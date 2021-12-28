import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { ListProduct } from "./components/Products/ListProduct";

function App() {
  return (
    <Container fluid>
      <div className="App">
        <Header/>
        <ListProduct/>
      </div>
    </Container>
  );
}

export default App;
