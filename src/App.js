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
import Blog from './components/Blog';
import PrivateRoutes from './Privateroutes/PrivateRoutes';
import Addservice from './components/Addservice';
import UpdateReview from './components/UpdateReview';

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
          loader : ()=> fetch('https://assignement-11-server.vercel.app/services')
        },
        {
          path : '/services',
          element : <Services></Services>,
          loader : ()=> fetch('https://assignement-11-server.vercel.app/services')
        },
        {
          path : '/services/:id',
          element : <Review></Review>,
          loader : ({params}) => fetch(`https://assignement-11-server.vercel.app/services/${params.id}`)
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
          element : <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
        },
        {
          path : '/addservice',
          element : <PrivateRoutes><Addservice></Addservice></PrivateRoutes>,
          loader : ()=> fetch(`https://assignement-11-server.vercel.app/services`)
        },
        {
          path : '/blog',
          element : <Blog></Blog>
        },
        {
          path : '/updatereview/:id',
          element : <UpdateReview></UpdateReview>,
          loader : ({params}) => fetch(`https://assignement-11-server.vercel.app/review/${params.id}`)
        }
      ]
    }
  ])
  return (
    <div className="w-[95%] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
