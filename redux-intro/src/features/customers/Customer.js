//In order to read data from redux data useSelector hook is used

import { useSelector } from "react-redux";

function Customer() {
  //This useSelector creates the subscription to the store so whenever the store changes the component that is subscribed to the store will automatically changes

  const customer = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
