import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home';
import Services from './components/Services';
import Error from './components/Error';
import Review from './components/Review';
import Login from './components/Login';
import Register from './components/Register';
import MyReviews from './components/MyReviews';

function App() {
  const router = createBrowserRouter([
    {
      path : "*",
      element : <Error></Error>
    },
    {
      path: '/',
      element: <Main></Main>,
      children: [
        
        {
          path: '/',
          element: <Home></Home>,
          loader : ()=> fetch('http://localhost:5000/servicesName')
        },
        {
          path : '/services',
          element : <Services></Services>,
          loader : ()=> fetch('http://localhost:5000/services')
        },
        {
          path : '/services/:id',
          element : <Review></Review>,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/register',
          element : <Register></Register>
        },
        {
          path : '/myreviews',
          element : <MyReviews></MyReviews>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
