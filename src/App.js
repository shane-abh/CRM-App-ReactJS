import { BrowserRouter,Route,Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import Nav from "./components/Nav";
import CategoriesContext from "./context";
import { useState } from "react";



const App = () => {

  const {categories,setCategories} = useState(null);
  const value = {categories, setCategories}

  return (
    <div className="app">
      <CategoriesContext.Provider value = {value}>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/ticket' element={<TicketPage/>}></Route>
          <Route path='/ticket/:id' element={<TicketPage editmode={true}/>}></Route>
        </Routes>
      </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
