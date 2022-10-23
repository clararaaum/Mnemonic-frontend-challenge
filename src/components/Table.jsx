import react from 'react';
import { useState, useEffect } from 'react';
import { getData } from './api';
import Row from './Row';
import TableHeader from './TableHeader';
import Button from '@mui/material/Button';

const Table = () => { 

  const [pokemons, setPokemons] = useState(Object.values(getData().pokemon));
  const [isLoading, setIsLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(localStorage.getItem('isVisible') === "true");
  const [sortBy, SetSortBy] = useState(localStorage.getItem('sortBy') || 'asc');
  const [OrderBy, SetOrderBy] = useState(localStorage.getItem('OrderBy') || 'id');

  useEffect(() => {
    localStorage.setItem('isVisible', isVisible);
  }, [isVisible]);

  useEffect(() => {
    localStorage.setItem('sortBy', sortBy);
  }, [sortBy]);

  useEffect(() => {
    localStorage.setItem('OrderBy', OrderBy);
  }, [OrderBy]);

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  }

  const sortPokemons = (pokemon) => { 
    let result = pokemon.sort((a, b) => a[OrderBy] - b[OrderBy]);
    if(sortBy === 'desc') {
      result = result.reverse();
    }
    return result;
  }

  return ( 
    isLoading ? <div> 
      Loading...
    </div> :
    <div>
      <Button variant="outlined" data-cy='visibleButton' onClick={toggleIsVisible}>{isVisible === true ? "make invisible" : "make visible"}</Button>
      <div>
        <TableHeader setOrderBy={SetOrderBy} orderBy={OrderBy} sortBy={sortBy} setSortBy={SetSortBy} isVisible={isVisible}/>
      </div>
      {sortPokemons(pokemons)
        .map((pokemon) => <Row key={pokemon.id} props={pokemon} isVisible={isVisible}></Row>)
      }
    </div>
  )
}

export default Table;