import { ComponentProps } from "react"

interface InfoCardProps extends Omit<ComponentProps<"div">, "children"> {}

export type { InfoCardProps }
