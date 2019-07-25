import styled from "@emotion/styled";

const ColumnsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  > * {
    flex: 0 0 40%;
  }
`;

export default ColumnsSection;
