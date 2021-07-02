import React from "react"
import Page1 from "./containers/Page1"
import Page2 from "./containers/Page2"

export type PageConfig = {
  name: string
  route: string
  component: React.ComponentType
}

export type MenuConfig = {
  name: string
  route: string
  children: PageConfig[]
}

export const routeConfig: (MenuConfig | PageConfig)[] = [
  {
    name: "Menu1",
    route: "menu1",
    children: [{ name: "Page1", route: "page1", component: Page1 }],
  },
  { name: "Page2", route: "page2", component: Page2 },
]
