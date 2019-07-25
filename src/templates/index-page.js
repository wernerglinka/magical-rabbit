import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PageBanner from "../components/PageBanner";
import ContentContainer from "../components/ContentContainer";
import IntroSection from "../components/IntroSection";
import ContentSection from "../components/ContentSection";
import ColumnsSection from "../components/ColumnsSection";
import Button from "../components/Button";
import CenterItems from "../components/CenterItems";
import ImageGrid from "../components/ImageGrid";

const TestDiv = styled.div`
  padding: 30px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  intro,
  main
}) => (
  <div>
    {console.log(main)}
    <PageBanner>
      <PreviewCompatibleImage imageInfo={{ image }} />
      <div className="bannerProse">
        <h1>{heading}</h1>
        <p className="subtitle">{subheading}</p>
      </div>
    </PageBanner>

    <ContentContainer>
      <IntroSection>
        <h1>{mainpitch.title}</h1>
        <p>{mainpitch.description}</p>
      </IntroSection>

      <ContentSection>
        <h1>{intro.heading}</h1>
        <p>{intro.description}</p>
      </ContentSection>

      <ColumnsSection columns={2}>
        <Features gridItems={intro.blurbs} />
      </ColumnsSection>

      <CenterItems>
        <Button secondary to="/products">
          See all products
        </Button>
      </CenterItems>

      <ContentSection>
        <h1>{main.heading}</h1>
        <p>{main.description}</p>
        <ImageGrid>
          <PreviewCompatibleImage imageInfo={main.image1} />
          <PreviewCompatibleImage imageInfo={main.image2} />
        </ImageGrid>
      </ContentSection>
    </ContentContainer>

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { template: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          description
          heading
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
