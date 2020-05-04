import React from "react";
import Layout from "../layout";

const NotFoundPage = () => {
  return <Layout location={{ pathName: "/404" }}>Page not found</Layout>;
};

export default NotFoundPage;
