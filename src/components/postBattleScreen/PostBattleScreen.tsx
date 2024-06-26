import type { PostBattleScreenProps } from '@/components/postBattleScreen/PostBattleScreen.types'
import { TeamColumn } from '@/components/teamColumn/TeamColumn'
import styles from '@/components/postBattleScreen/PostBattleScreen.module.css'

export const PostBattleScreen = ({ winningTeam, losingTeam }: PostBattleScreenProps) => (
	<div className={styles['screen']}>
		<TeamColumn team={winningTeam} title="Winners" />
		<TeamColumn team={losingTeam} title="Losers" />
	</div>
)
