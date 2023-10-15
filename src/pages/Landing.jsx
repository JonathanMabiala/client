import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper className="">
      <h1>Landing Page</h1>
      <div className="content">Some content</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: red;
  h1 {
    color: white;
  }
  .content {
    background: blue;
    color: yellow;
  }
`;
export default Landing;