import { Meta, Story } from "@storybook/react"
import { Password, PasswordProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Input",
  component: Password,
} as Meta

export const password: StoryFn<PasswordProps> = (props) => {
  return (
    <div>
      <Password w={"280px"} {...props} />
    </div>
  )
}
