import styled from "styled-components";
import media from "./media";

const Section = styled.section`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 800px;

  ${media.tablet`padding: 100px 0;`};
`;

export default Section;
