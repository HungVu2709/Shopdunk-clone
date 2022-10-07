import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

// const spinnerStyle = {
//   color: 'blue',
// };

const SpinnerLoading = () => {
  return (
    <div className="spinnerLoading" style={{ textAlign: 'center' }}>
      <Spinner animation="border" />
    </div>
  );
};

export default SpinnerLoading;
