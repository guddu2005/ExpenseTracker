// store.js
import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../features/slices/transactionSlice';

export default configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});
