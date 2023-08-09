import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filterValue: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },

    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },

    setFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
