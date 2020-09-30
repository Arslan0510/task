import React from 'react';

const index = ({ history }) => {
  return (
    <div>
      <h1>Welcome to my Challenge</h1>
      <button
        className='btn btn-primary'
        onClick={() => history.push('/search')}
      >
        Click to add breed
      </button>
    </div>
  );
};

export default index;
