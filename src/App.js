import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Home from "./Pages/Home"
import Hollywood from "./Pages/Hollywood"
import Kollywood from "./Pages/Kollywood"
import Technology from "./Pages/Technology"
import Fitness from "./Pages/Fitness"
import Food from "./Pages/Food"
import SingleBlogPage from "./Pages/SingleBlogPage";
import './Style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Nav/> 
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/kollywood" element = {<Kollywood />}/>
        <Route path="/hollywood" element = {<Hollywood />}/>
        <Route path="/technology" element = {<Technology />}/>
        <Route path="/fitness" element = {<Fitness />} />
        <Route path="/food" element = {<Food />} />
        <Route path=":category/:articleid" element = {<SingleBlogPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;