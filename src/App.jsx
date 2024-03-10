import { Fragment } from "react"
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import { Link, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <Fragment>
      <header>
        
      <nav>
        <Link to={"portfolio"}>Главное</Link>
        <Link to={"/portfolio/services"}>Услуги</Link>
        <Link to={"/portfolio/project"}>Portfolio</Link>
        <Link to={"/portfolio/contacts"}>Contacts</Link>
      </nav>

      </header>

      <main>
        <Routes>
          <Route path="/portfolio" index element={<Home/>}/>
          <Route path="/portfolio/services" element={<Services/>}/>
          <Route path="/portfolio/project" element={<Portfolio/>}/>
          <Route path="/portfolio/contacts" element={<Contacts/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </main>

    </Fragment>
  )
}

export default App; 