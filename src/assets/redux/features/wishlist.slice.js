import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  whishlist: []
}

export const counterSlice = createSlice({
  name: 'whishlist',
  initialState,
  reducers: {
    addToWhishlist: ({whishlist}, {payload}) => {
      const exists = whishlist.find(i => i.id === payload.id);
        if(!exists) whishlist.push(payload);
    } ,
    removeFromWhishlist: (state, action) => {
       state.whishlist = state.whishlist.filter(product => product.id !== action.payload.id)
    },
    isInWhishlist: (state, action) => {
      return state.whishlist.find(i => i.id === action.payload.id);
    }
  },
})

export const { addToWhishlist, removeFromWhishlist, isInWhishlist } = counterSlice.actions

export default counterSlice.reducer