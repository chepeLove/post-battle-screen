import type { Player } from '@/types'

const generatePlayer = (nicknamePrefix: string, index: number): Player => {
	return {
		nickname: `${nicknamePrefix}${index + 1}`,
		score: Math.floor(Math.random() * 100),
		alive: Math.random() > 0.5,
		kills: Math.floor(Math.random() * 10),
		deaths: Math.floor(Math.random() * 10)
	}
}

export const generateTeam = (teamName: string, size: number): Player[] => {
	return Array.from({ length: size }, (_, i) => generatePlayer(teamName, i))
}
