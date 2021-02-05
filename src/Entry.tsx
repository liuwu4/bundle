import React from 'react';
import './entry.less';
const Entry = () => {
  window.addEventListener('load', function (_event) {
    console.log('load', window.location);
  });
  window.addEventListener('hashchange', function (event) {
    console.log('change', event);
  });
  return (
    <div className="webpack">
      <div className="webpack-name">
        &-
        <div className="webpack-namels">ls</div>
        <div className="webpack-after">after</div>
      </div>
      <div className="webpack-colors">
        colors
      </div>
    </div>
  );
};
export default Entry;
