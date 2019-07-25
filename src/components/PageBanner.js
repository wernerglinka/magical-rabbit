import styled from "@emotion/styled";

const PageBanner = styled.div`
  position: relative;

  img {
    display: block;
  }

  .bannerProse {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 60px;
    color: #fff;
    text-shadow: 0px 0px 5px #111111;
  }
  .subtitle {
    font-size: 30px;
    color: #fff;
    text-shadow: 0px 0px 5px #111111;
  }
`;

export default PageBanner;
