import type { MouseEventHandler, ReactNode } from 'react'

export interface CardProps {
	className?: string
	children: ReactNode
	onMouseEnter: MouseEventHandler<HTMLDivElement>
	onMouseLeave: MouseEventHandler<HTMLDivElement>
}
