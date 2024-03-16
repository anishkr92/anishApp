import React, { ComponentProps, FC } from "react"
import {
  InfoCardItemInternalSeparator,
  InfoCardItemTitle,
  InfoCardItemValue,
} from "../styledComponents"

interface InfoCardItemProps extends Omit<ComponentProps<"div">, "children"> {
  itemTitle: string
  itemValue: string
}

const InfoCardItem: FC<InfoCardItemProps> = ({
  itemTitle,
  itemValue,
  ...props
}) => {
  return (
    <div {...props}>
      <InfoCardItemTitle>{itemTitle}</InfoCardItemTitle>
      <InfoCardItemInternalSeparator>:</InfoCardItemInternalSeparator>
      <InfoCardItemValue>{itemValue}</InfoCardItemValue>
    </div>
  )
}

export default InfoCardItem
export type { InfoCardItemProps }
