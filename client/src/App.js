import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import AddContact from './Pages/Add/AddContact';
import Home from './Pages/Home/Home';
import ContactList from './Components/ContactList/ContactList';
import EditContact from './Pages/Edit/EditContact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddContact />} />
        <Route path='/users' element={<ContactList />} />
        <Route path='/edit/:id' element={<EditContact />} />

      </Routes>
     </div> 
  );
}

export default App;
