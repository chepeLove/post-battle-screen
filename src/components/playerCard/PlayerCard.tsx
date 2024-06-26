import { Card, Tooltip } from '@/components'
import { useState } from 'react'
import type { PlayerCardProps } from '@/components/playerCard/PlayerCard.types'
import styles from '@/components/playerCard/PlayerCard.module.css'

export const PlayerCard = ({ player }: PlayerCardProps) => {
	const [showTooltip, setShowTooltip] = useState(false)

	const handleMouseEnter = () => {
		setShowTooltip(true)
	}

	const handleMouseLeave = () => {
		setShowTooltip(false)
	}

	const handleAddFriend = () => {
		alert(`Friend request sent to ${player.nickname}`)
	}

	return (
		<Card
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`${styles.playerCard} ${player.alive ? styles.alive : styles.dead}`}
		>
			<h3>{player.nickname}</h3>
			<p>Score: {player.score}</p>
			{showTooltip && (
				<Tooltip>
					<p>Kills: {player.kills}</p>
					<p>Deaths: {player.deaths}</p>
					<button onClick={handleAddFriend}>Add Friend</button>
				</Tooltip>
			)}
		</Card>
	)
}
