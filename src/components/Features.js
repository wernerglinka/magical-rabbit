import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const FeatureItem = styled.div`
  padding: 30px 20px;

  .gatsby-image-wrapper {
    margin-bottom: 40px;
  }
`;

const FeatureGrid = ({ gridItems }) =>
  gridItems.map(item => (
    <FeatureItem key={item.text}>
      <PreviewCompatibleImage imageInfo={item} />
      <p>{item.text}</p>
    </FeatureItem>
  ));

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
