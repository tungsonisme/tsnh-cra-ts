import React from "react"
import { Menu as AntMenu } from "antd"
import { MenuConfig, PageConfig, routeConfig } from "../../config"
import { useLocation, useHistory } from "react-router-dom"
import s from "./index.module.scss"

const { SubMenu: AntSubMenu } = AntMenu

const Menu: React.FC = () => {
  const { push } = useHistory()
  const { pathname } = useLocation()
  const [, first, second] = pathname.split("/")
  const selectedKey = second ? `${first}-${second}` : first

  return (
    <AntMenu
      className={s.menu}
      mode="inline"
      defaultOpenKeys={[first]}
      selectedKeys={[selectedKey]}
    >
      {routeConfig.map((parent) => {
        if ((parent as PageConfig).component) {
          return (
            <AntMenu.Item
              key={parent.route}
              onClick={() => push(`/${parent.route}`)}
            >
              {parent.name}
            </AntMenu.Item>
          )
        }

        return (
          <AntSubMenu key={parent.route} title={parent.name}>
            {(parent as MenuConfig).children.map((child) => {
              return (
                <AntMenu.Item
                  key={`${parent.route}-${child.route}`}
                  onClick={() => push(`/${parent.route}/${child.route}`)}
                >
                  {child.name}
                </AntMenu.Item>
              )
            })}
          </AntSubMenu>
        )
      })}
    </AntMenu>
  )
}

export default Menu
