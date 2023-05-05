import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataMobil } from "./mobilApi";

export const getMobil = createAsyncThunk("mobil/getMobil", async () => {
  const dataMobil =  getDataMobil();
  return dataMobil;
});
const mobilSlice = createSlice({
  name: "mobil",
  initialState: {
    data: [],
    filterData: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
      builder
      .addCase(getMobil.pending, (state) => {
          state.loading = 'loading'
      })
      .addCase(getMobil.fulfilled, (state, action) => {
          state.loading = 'idle'
          state.data = action.payload
          state.filterData = action.payload
      })
}

});

export const mobilReducer = (state) => state.mobil;
export default mobilSlice.reducer;
