import type { TooltipProps } from '@/components/ui/tooltip/Tooltip.types'
import styles from '@/components/ui/tooltip/Tooltip.module.css'

export const Tooltip = ({ children }: TooltipProps) => {
	return <div className={styles['tooltip']}>{children}</div>
}
