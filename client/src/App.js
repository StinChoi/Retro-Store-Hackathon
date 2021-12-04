import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Categories from './components/Categories';
import About from './components/About';
import Items from './components/Items';
import Jobs from './components/Jobs';
import Navbar from "./components/Navbar";
import CateEditForm from './components/CateEditForm';
import Item from './components/Item';
import Job from './components/Job';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<Job />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id/items" element={<Items />} />
        <Route path="/categories/:id/edit" element={<CateEditForm />} />
        <Route path="/categories/:category_id/items/:id" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
