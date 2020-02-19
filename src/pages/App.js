import React from 'react';
import Request from '@src/utils/Request';

const App = () => {
 const handleClick = async () => {
    const text = await Request.get('/address');
    console.log('返回:', text);
  };

  return (
    <div>
      <button onClick={handleClick}>点击</button>
      init
    </div>
  );
};
export default App;