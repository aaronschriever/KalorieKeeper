import React from 'react';
 

function ScalesSVG(props){
    const {strokeWidth, color, fill} = props;
    return(
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="80" width="80" viewBox="0 0 660 660">

  <g id="_x3C_meter_x3E_" fill={fill} stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="10">
    <path id="XMLID_3_" fill={fill} stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="10" d="M380.1 134l-125.3-1c-5 0-9.1-4.2-8.9-9.3.7-21.5 8.9-73.5 72-73.5 66.7 0 71.8 53.5 71.2 75-.1 5-4.1 8.9-9 8.8z"/>
    <g id="XMLID_5_">
      <g id="XMLID_14_">
        <path id="XMLID_1_" d="M322.5 131.6l.3-34.5c.1-5.8-8.9-5.8-9 0l-.3 34.5c0 5.8 9 5.8 9 0z"/>
      </g>
    </g>

  </g>
  <path fill={fill} stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="10" id="_x3C_back_x3E_"  d="M493.6,461.4H145.9c-27,0-49-22.1-49-49V67.2c0-26.9,22.1-49,49-49h347.7
	c26.9,0,49,22,49,49v345.2C542.6,439.4,520.6,461.4,493.6,461.4z" />
    <path fill={fill} stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="10" id="foot" d="M461.6,413.7H173.8c-15.4,0-28-12.6-28-28V248.5c0-15.4,12.6-28,28-28h287.7
	c15.4,0,28,12.6,28,28v137.2C489.6,401.1,477,413.7,461.6,413.7z"/>
</svg>);
}
export default ScalesSVG;