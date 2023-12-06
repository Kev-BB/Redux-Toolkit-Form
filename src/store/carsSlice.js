import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: []
  },
  reducers: {
    addCars(state, action) {
      state.cars.push(action.payload);
    },
    removeCar: (state, action) => {
      const carId = action.payload
      state.cars = state.cars.filter((car) => car.id !== carId)
    },
  }
});

export const { addCars, removeCar } =
  carsSlice.actions
export const carsReducer = carsSlice.reducer;
