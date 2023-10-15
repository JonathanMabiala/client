import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="">
      <h1>Error Page {error.status}</h1>
      <Link to="/">back home</Link>
    </div>
  );
};
export default Error;
