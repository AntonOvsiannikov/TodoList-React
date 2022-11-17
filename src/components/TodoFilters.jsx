import React from 'react';
import FilterNavBar from './FilterNavBar';

const TodoFilters = ({filter}) => {
  const navListValue = [
    {filterValue:'All',hashValue:'#/'},
    {filterValue:'Active',hashValue:'#/active'},
    {filterValue:'Completed',hashValue:'#/completed'}
  ];
  return (
    <ul className="filters">
      {navListValue.map((navItem,index) => <FilterNavBar filter={filter} key={index} hashValue={navItem.hashValue}>{navItem.filterValue}</FilterNavBar>)}
     </ul>
  )
}

export default TodoFilters