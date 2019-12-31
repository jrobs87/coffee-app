import React from 'react';

import BlockReveal from '../../components/BlockReveal';

import './index.css';

function RouteZero() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <BlockReveal content={""} />
      </div>
    </div>
  );
}

export default RouteZero;
