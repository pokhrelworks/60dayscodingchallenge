import { useNavigate, useRouteError } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  //useRouteError is a hook that returns the error object of the current route. It is used to get the error message.
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
