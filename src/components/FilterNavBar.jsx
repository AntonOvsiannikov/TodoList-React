import React from 'react';
const FilterNavBar = ({children,hashValue,filter}) => {
  const filterRenderList = (e) => {
    window.location.href = e.target.href;
    filter();
  }
  return (
    <li>
      <a href={hashValue} 
        className= {window.location.hash === hashValue ? 'selected' : ''}
        onClick={filterRenderList}>{children}</a>
    </li>
  )
}

export default FilterNavBar