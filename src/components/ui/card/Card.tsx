import type { CardProps } from '@/components/ui/card/Card.types'

export const Card = ({ className, children, onMouseEnter, onMouseLeave }: CardProps) => {
	return (
		<div className={`card ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{children}
		</div>
	)
}
