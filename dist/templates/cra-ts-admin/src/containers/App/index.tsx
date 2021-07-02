import React from "react"
import { Layout } from "antd"
import s from "./index.module.scss"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Routing from "../../components/Routing"

const { Sider } = Layout

const App: React.FC = () => {
  return (
    <div className={s.appContainer}>
      <Header />

      <Layout className={s.appInnerContainer}>
        <Sider width={200}>
          <Menu />
        </Sider>

        <Layout className={s.pageContainer}>
          <Routing />
        </Layout>
      </Layout>
    </div>
  )
}

export default App
