export const phases = {
  'New Moon': '🌑',
  'Waxing Crescent': '🌒',
  'First Quarter': '🌓',
  'Waxing Gibbous': '🌔',
  'Full Moon': '🌕',
  'Waning Gibbous': '🌖',
  'Last Quarter': '🌗',
  'Waning Crescent': '🌘',
}

export type Phase = keyof typeof phases

export function getCurrentPhase(): Phase {
  const lunarCycleLength = 29.53 // days
  const phaseLength = lunarCycleLength / 8

  // September 6th, 2021 at 6:52 PM MDT was a new moon
  const fullMoonSept2021 = new Date('2021-09-06T18:52:00')

  const now = new Date()

  const daysSinceBaseFullMoon = (now.getTime() - fullMoonSept2021.getTime()) / (1000 * 60 * 60 * 24)

  const progressIntoCurrentPhase = daysSinceBaseFullMoon % lunarCycleLength

  const phase = Math.floor(progressIntoCurrentPhase / phaseLength)

  return Object.keys(phases)[phase] as Phase
}
