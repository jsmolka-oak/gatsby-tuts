import * as React from "react";
import { Container } from "../styles/index.styles";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  return (
    <Container>
      <h1>Hello</h1>
      <h3>Hi!</h3>
      <h3>{data.site.siteMetadata.title}</h3>
    </Container>
  );

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          someText
        }
      }
    }
  `);
};

export default IndexPage;
