import { Meta, StoryFn } from "@storybook/react"
import { Input, InputProps } from "../src"
import { PersonIcon, Space } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Input",
  component: Input,
} as Meta

export const Basic: StoryFn<InputProps> = (props) => {
  return (
    <div>
      <Space direction={"vertical"} align="start">
        <Input {...props} />
        <Input suffix={<PersonIcon />} {...props} />
        <Input prefix="prefix" {...props} />
        <Input suffix="suffix" {...props} />
        <Input addBefore="Before" {...props} />
        <Input addAfter="After" {...props} />
        <Input
          colorScheme="techPurple"
          addBefore="Before"
          addAfter="After"
          {...props}
        />
        <Input
          showWordLimit
          maxLength={{
            length: 10,
            errorOnly: true,
          }}
          {...props}
        />
      </Space>
    </div>
  )
}
