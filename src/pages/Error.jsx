import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="">
          <img src={img} alt="not found" />
          <h3>Ohh! page not found</h3>
          <p>We can't seem to dind the page you are looking for</p>
          <Link to="/dashboard">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper className="">
      <div className="">
        <h3>something went wrong</h3>
      </div>
      <Link to="/">back home</Link>
    </Wrapper>
  );
};
export default Error;
