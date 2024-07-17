//It will automatically create the action creators and makes writing reducers easier and we can mutate the state directly in the reducer.(immer.js is used for this purpose)
//The third one is the must useful one.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },

    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

//Thunks is already inside the redux toolkit.
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  //The react now will knows that this is an asynchronous action so it will hold that function
  return async function (dispatch, getState) {
    //API Call
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await res.json();
    const converted = data.rates.USD;
    dispatch({ type: "account/deposite", payload: converted });
    // console.log(data);
    //return dispatch()
  };
}




export const {withdraw, requestLoan, convertingCurrency, payLoan } =
accountSlice.actions;
export default accountSlice.reducer;
// console.log(accountSlice);
// export default function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/convertingCurrency":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     default:
//       return state;
//   }
// }

// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };
//   //The react now will knows that this is an asynchronous action so it will hold that function
//   return async function (dispatch, getState) {
//     //API Call
//     dispatch({ type: "account/convertingCurrency" });
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );

//     const data = await res.json();
//     const converted = data.rates.USD;
//     dispatch({ type: "account/deposite", payload: converted });
//     // console.log(data);
//     //return dispatch()
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }

// export function payLoan() {
//   return { type: "account/payLoan" };
// }
