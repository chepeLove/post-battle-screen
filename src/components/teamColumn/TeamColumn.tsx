import { PlayerCard } from '@/components'
import type { TeamColumnProps } from '@/components/teamColumn/TeamColumn.types'
import styles from '@/components/teamColumn/TeamColumn.module.css'

export const TeamColumn = ({ team, title }: TeamColumnProps) => (
	<div className={styles['column']}>
		<h2>{title}</h2>
		{team.map(player => (
			<PlayerCard key={player.nickname} player={player} />
		))}
	</div>
)
