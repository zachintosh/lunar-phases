import './App.css'
import { useState } from 'react'
import MoonPhase from './components/Phase'
import { css } from 'linaria'
import { phases, getCurrentPhase } from './components/phases'
import PhaseButton from './components/PhaseButton'
import type { Phase } from './components/phases'

const pageLayoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #000 url('https://image.ibb.co/mjnygo/stars.png') repeat top center;
`

const moonCenterCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const phaseListCss = css`
  display: flex;
  gap: 8px;
  font-size: 24px;
  justify-content: center;
  list-style: none;

  @media (max-width: 330px) {
    gap: 0;
  }
`

const phaseNameCss = css`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  padding: 40px 0;
`

const currentLabelCss = css`
  font-size: 24px;
  opacity: 0.5;
  line-height: 48px;
  height: 48px;
`

const learnMoreCss = css`
  all: unset;
  cursor: pointer;
  color: lightseagreen;
`

const currentPhase = getCurrentPhase()

export default function App(): JSX.Element {
  const [phase, setPhase] = useState<Phase>(currentPhase)
  return (
    <div className={pageLayoutCss}>
      <div>
        <div className={moonCenterCss}>
          <MoonPhase phase={phase} />
        </div>
        <div className={phaseListCss}>
          {Object.entries(phases).map(([p, emoji]) => (
            <PhaseButton
              key={p}
              data-active={p === phase ? true : undefined}
              onClick={() => setPhase(p as Phase)}
            >
              {emoji}
            </PhaseButton>
          ))}
        </div>
        <div className={phaseNameCss}>
          {phase}
          <div className={currentLabelCss}>{phase === currentPhase && '(Current)'}</div>
        </div>
      </div>
      <a
        className={learnMoreCss}
        target="_blank"
        href="https://moon.nasa.gov/moon-in-motion/moon-phases/"
      >
        Learn More
      </a>
    </div>
  )
}
