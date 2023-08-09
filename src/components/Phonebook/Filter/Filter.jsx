import { setFilter } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FilterText, FilterInput } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(state => state.contacts.filterValue);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <div>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput type="text" value={value} onChange={changeFilter} />
    </div>
  );
};
