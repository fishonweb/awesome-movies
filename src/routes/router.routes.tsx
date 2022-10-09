import { createBrowserRouter } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails/movieDetails.component';
import Home from '../pages/home.page';
import Root from '../pages/root.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'movies/:movieId',
        element: <MovieDetails />,
      },
    ],
  },
]);

export default router;
