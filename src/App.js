import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import Home from "./routes/home/home.component";
import Shop from './routes/shop/shop.component';

const App = () => {
  return(
  <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
};

export default App;