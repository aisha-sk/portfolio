import React from 'react';

export const Fluid = () => {
  React.useEffect(() => {
    const script = document.createElement('script');

    script.src = 'assets/js/fluidInit.js';
    script.async = true;
    script.type = 'module';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas className="fluid-canvas"></canvas>;
};
