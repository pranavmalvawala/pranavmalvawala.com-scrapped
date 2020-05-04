import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

const Head = () => (
  <Helmet>
    <meta itemProp="name" content={config.title} />
    <meta itemProp="description" content={config.description} />
  </Helmet>
);

Head.propTypes = {};

export default Head;
