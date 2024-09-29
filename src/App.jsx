import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/HomePage';
import NotFound from './pages/notFound/NotFoundPage';
import Portfolio from './pages/portfolio/PortfolioPage';
import Questions from './pages/questions/QuestionsPage';
import ServicesPage from './pages/services/ServicesPage';
import PagesLayout from './pages/pagesLayout/PagesLayout';

const App = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  // const toggleModal = () => {
  //   setModalOpen((prev) => !prev);
  // };

  // function fizzBuzz(n) {
  //   let value = n;

  //   if (value % 3 === 0 && value % 5 === 0) {
  //     console.log('fizzBuzz');
  //   } else if (value % 3 === 0) {
  //     console.log('Fizz');
  //   } else if (value % 5 === 0) {
  //     console.log('Buzz');
  //   } else {
  //     console.log(value);
  //   }
  // }

  // fizzBuzz(2);

  function getMaximumEvenSum(val) {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
      sum += val[i];
    }

    if (sum % 2 === 0) {
      return sum;
    }
    return null;
  }

  console.log(getMaximumEvenSum([2, 3, 6, 10, 1, 3]));

  return (
    <>
      <Routes>
        <Route path="/" element={<PagesLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="questions" element={<Questions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/* {modalOpen && <Modal toggleModal={toggleModal} />} */}
    </>
  );
};

export default App;
