import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';
import { styled } from 'styled-components';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleChangeValue = event => {
    const { value } = event.target;
    setFilter(value);
    dispatch(filterContact(value));
  };

  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterContainer>
        {' '}
        <img
          src="https://www.svgrepo.com/download/494568/search-head-seo.svg"
          alt="search"
          width="35"
        />
        <input
          onChange={handleChangeValue}
          type="text"
          name="filter"
          value={filter}
        />
      </FilterContainer>
    </>
  );
};

const FilterContainer = styled.div`
  display: flex;
  align-items: inherit;
  justify-content: center;
  gap: 10px;
`;
