import React from "react"

import Layout from "../components/layout"
import Home from "../components/home"
import Moderators from "../components/moderators"
import Speakers from "../components/speakers";

const IndexPage = () => (
  <Layout>
    <Home />
    <Moderators />
    <Speakers />
  </Layout>
)

export default IndexPage
