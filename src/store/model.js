import customerData from "../dbstore/customers.json";
import { action } from "easy-peasy";

export default {
  customers: customerData,
  isModelOpen: false,
  selectedRow: {},

  //Actions

  toggle: action((state) => {
    state.isModelOpen = !state.isModelOpen;
  }),

  selectRow: action((state, row) => {
    state.selectedRow = row;
  }),

  update: action((state, row) => {
    state.customers.forEach((customer) => {
      if (customer.id === row.id) {
        customer.budget = parseInt(row.budget);
        state.isModelOpen = false;
      }
    });
  }),
};
