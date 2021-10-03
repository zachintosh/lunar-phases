import { Phase } from './phases'
import { css } from 'linaria'
import moonSvg from '../../assets/moon.svg'

const moonCircleCss = css`
  height: var(--moon-size);
  width: var(--moon-size);
  border-radius: 50%;
  background: #222;
  overflow: hidden;
  position: relative;
  background-image: url(${moonSvg});
  background-size: cover;

  --moon-size: 300px;

  @media (max-width: 600px) {
    --moon-size: 260px;
  }
`

const moonDarkCss = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backdrop-filter: brightness(0.2);
  border-radius: 35% / 50%;
  &[data-phase='Waxing Crescent'] {
    display: initial;
    transform: translateX(-15%);
  }
  &[data-phase='First Quarter'] {
    transform: translateX(-50%);
    border-radius: 0px;
  }
  &[data-phase='Full Moon'] {
    display: none;
  }
  &[data-phase='Last Quarter'] {
    transform: translateX(50%);
    border-radius: 0px;
  }
  &[data-phase='Waning Crescent'] {
    display: initial;
    transform: translateX(15%);
  }
`

const moonLitCss = css`
  height: 100%;
  width: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 0;

  &[data-phase='Waxing Gibbous'] {
    display: initial;
    transform: translateX(50px);
    border-radius: 35% / 50%;
    backdrop-filter: brightness(
      5
    ); // need to quadrule the lighting, since it's reduce by moonDarkCss to 0.25
  }

  &[data-phase='Waning Gibbous'] {
    display: initial;
    transform: translateX(-50px);
    border-radius: 35% / 50%;
    backdrop-filter: brightness(
      5
    ); // need to quadrule the lighting, since it's reduce by moonDarkCss to 0.25
  }
`

type Props = {
  phase: Phase
}

export default function MoonPhase({ phase }: Props): JSX.Element {
  return (
    <div className={moonCircleCss}>
      <div className={moonDarkCss} data-phase={phase} />
      <div className={moonLitCss} data-phase={phase} />
    </div>
  )
}
