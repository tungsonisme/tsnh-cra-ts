import * as React from "react"
import { Meta } from "@storybook/react/types-6-0"
import LibComponent from "../components/LibComponent"
import { ComponentStory } from "@storybook/react"

export default {
  title: "components/LibComponent",
  component: LibComponent,
} as Meta

const Template: ComponentStory<typeof LibComponent> = (args) => (
  <LibComponent {...args} />
)

export const Primary = Template.bind({})
