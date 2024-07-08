import {useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {

  //useRouteError is a hook that returns the error object of the current route. It is used to get the error message.
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    
    </div>
  );
}

export default NotFound;
