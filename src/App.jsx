import React from 'react';
import SmoothScroll from './assets/js/SmoothScroll';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Fluid } from './components/Fluid/Fluid';
import { Loader } from './components/Loader/Loader';

export const App = () => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loaded && <Loader />}
      <div className="noise"></div>
      <Fluid />
      <Header />
      <SmoothScroll>
        <Main loaded={loaded} />
      </SmoothScroll>
    </>
  );
};
