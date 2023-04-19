import { CardButton } from "./style"
import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    type?: "button" | "submit"
}

export const Button = ({ children, type = "button" }: ButtonProps) => {
    return (
        <CardButton type={type}>{children}</CardButton>
    )
}