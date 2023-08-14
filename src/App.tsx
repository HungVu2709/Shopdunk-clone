// import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import RouterManager from './routes';
import { BrowserRouter } from 'react-router-dom';

// export const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter>
      {/* <HistoryRouter history={history}> */}
      <RouterManager />
      <ToastContainer autoClose={1000} />
      {/* </HistoryRouter> */}
    </BrowserRouter>
  );
};
export default App;
