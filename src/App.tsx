import { PostBattleScreen } from '@/components'
import { generateTeam } from '@/utils'

const winningTeam = generateTeam('Winner', 50)
const losingTeam = generateTeam('Loser', 50)

export const App = () => {
	return <PostBattleScreen winningTeam={winningTeam} losingTeam={losingTeam} />
}
