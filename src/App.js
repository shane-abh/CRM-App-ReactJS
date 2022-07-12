import { BrowserRouter,Route,Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import Nav from "./components/Nav";



const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/ticket' element={<TicketPage/>}></Route>
          <Route path='/ticket/:id' element={<TicketPage editmode={true}/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
