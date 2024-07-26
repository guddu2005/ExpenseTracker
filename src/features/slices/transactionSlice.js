// store/transactionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    removeTransaction: (state, action) => { // ensure the action name matches
      state.transactions = state.transactions.filter(trans => trans.id !== action.payload);
    }
  }
});

export const { addTransaction, removeTransaction } = transactionSlice.actions; // ensure the action names match

export default transactionSlice.reducer;
