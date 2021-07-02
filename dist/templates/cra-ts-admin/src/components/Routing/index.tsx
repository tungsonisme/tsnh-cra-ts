import React from "react"
import { Switch, Route } from "react-router-dom"
import { Breadcrumb, Layout } from "antd"
import { MenuConfig, PageConfig, routeConfig } from "../../config"
import s from "./index.module.scss"

const { Content } = Layout

const Routing: React.FC = () => {
  return (
    <Switch>
      {routeConfig.map((parent) => {
        if ((parent as PageConfig).component) {
          const PageComponent = (parent as PageConfig).component

          return (
            <Route exact path={`/${parent.route}`}>
              <Breadcrumb className={s.breadcrumb}>
                <Breadcrumb.Item>{parent.name}</Breadcrumb.Item>
              </Breadcrumb>

              <Content className={s.content}>
                <PageComponent />
              </Content>
            </Route>
          )
        }

        return (parent as MenuConfig).children.map((child) => {
          const PageComponent = child.component

          return (
            <Route exact key={child.route} path={`/${parent.route}/${child.route}`}>
              <Breadcrumb className={s.breadcrumb}>
                <Breadcrumb.Item>{parent.name}</Breadcrumb.Item>
                <Breadcrumb.Item>{child.name}</Breadcrumb.Item>
              </Breadcrumb>

              <Content className={s.content}>
                <PageComponent />
              </Content>
            </Route>
          )
        })
      })}
    </Switch>
  )
}

export default Routing
