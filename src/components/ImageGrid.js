import styled from "@emotion/styled";

const ImageGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40px 0;

  > * {
    flex: 0 0 40%;
  }

  img {
    max-width: 300px;
  }
`;

export default ImageGrid;
