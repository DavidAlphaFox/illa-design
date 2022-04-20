import { forwardRef } from "react"
import { ListItemProps } from "./interface"
import {
  applyListItemActionsStyle,
  applyListItemContainer,
  applyListItemExtraStyle,
  applyListItemInner,
} from "./style"

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  (props, ref) => {
    const { actions, extra, ...otherProps } = props
    return (
      <div css={applyListItemContainer} ref={ref} {...otherProps}>
        <div css={applyListItemInner}>
          {props.children}
          {actions && <div css={applyListItemActionsStyle}>{actions}</div>}
        </div>
        {extra && <div css={applyListItemExtraStyle}>{extra}</div>}
      </div>
    )
  },
)

ListItem.displayName = "ListItem"
