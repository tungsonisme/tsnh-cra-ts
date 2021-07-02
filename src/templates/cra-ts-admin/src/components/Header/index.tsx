import React from "react"
import { Layout } from "antd"
import s from "./index.module.scss"

const { Header: AntHeader } = Layout

const Header: React.FC = () => {
  return (
    <AntHeader>
      <div className={s.appName}><%= appName %></div>
    </AntHeader>
  )
}

export default Header
