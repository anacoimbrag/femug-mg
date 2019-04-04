import React from "react"

import Layout from "../components/layout"
import Home from "../components/home"
import Moderators from "../components/moderators"
import Speakers from "../components/speakers"
import Hosts from "../components/hosts"

const IndexPage = () => (
  <Layout>
    <Home />
    <Moderators />
    <Speakers />
    <Hosts />
  </Layout>
)

export default IndexPage
