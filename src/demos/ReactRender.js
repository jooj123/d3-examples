import { geoMercator, geoPath } from 'd3-geo';
import React, { Component } from 'react';
import worlddata from './data/world';

import './ReactRender.css';

class ReactRender extends Component {
  render() {
    const projection = geoMercator();
    const pathGenerator = geoPath().projection(projection);
    const countries = worlddata.features.map((d, i) => (
      <path key={'path' + i} d={pathGenerator(d)} className="countries" />
    ));
    return (
      <svg width={500} height={500}>
        {countries}
      </svg>
    );
  }
}

export default ReactRender;
