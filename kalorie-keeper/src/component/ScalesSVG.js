import React, { Component } from 'react';
 

function ScalesSVG(props){
    const {strokeWidth, color, fill} = props;
    return(
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="80" width="80" viewBox="0 0 660 660">

  <g id="_x3C_meter_x3E_" fill={fill} stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10">
    <path id="XMLID_3_" fill={fill} stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" d="M380.1 134l-125.3-1c-5 0-9.1-4.2-8.9-9.3.7-21.5 8.9-73.5 72-73.5 66.7 0 71.8 53.5 71.2 75-.1 5-4.1 8.9-9 8.8z"/>
    <g id="XMLID_5_">
      <g id="XMLID_14_">
        <path id="XMLID_1_" d="M322.5 131.6l.3-34.5c.1-5.8-8.9-5.8-9 0l-.3 34.5c0 5.8 9 5.8 9 0z"/>
      </g>
    </g>
  </g>
  <path fill={fill} stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" id="_x3C_back_x3E_" d="M535.6 461.4H103.9c-3.8 0-7-3.2-7-7V25.2c0-3.9 3.2-7 7-7h431.7c3.8 0 7 3.1 7 7v429.2c0 3.9-3.1 7-7 7z" />
  <path fill={fill} stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" id="_x3C_Left_x5F_foot_x3E_" d="M242 413.7h-91.1c-2.8 0-5-2.3-5-5V225.5c0-2.8 2.3-5 5-5H242c2.8 0 5 2.3 5 5v183.2c0 2.8-2.3 5-5 5z" />
  <path fill={fill} stroke={color} stroke-width={strokeWidth} stroke-miterlimit="10" id="Right_x5F_foot" d="M486.8 413.7h-93.1c-2.2 0-4-1.8-4-4V224.5c0-2.2 1.8-4 4-4h93.1c2.2 0 4 1.8 4 4v185.2c0 2.2-1.8 4-4 4z" />
</svg>);
}
export default ScalesSVG;