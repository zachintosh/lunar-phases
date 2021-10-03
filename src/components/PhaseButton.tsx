import { css } from 'linaria'

const phaseButtonCss = css`
  all: unset;
  transition: all 0.1s;
  cursor: pointer;
  height: var(--button-size);
  width: var(--button-size);
  border-radius: var(--button-size);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--button-text-size);
  line-height: var(--button-text-size);
  padding-left: 1px;
  color: white;
  &:hover {
    background: #292929;
  }
  &:active,
  &[data-active] {
    background: #333;
  }

  --button-size: 60px;
  --button-text-size: 36px;

  @media (max-width: 600px) {
    --button-size: 32px;
    --button-text-size: 24px;
  }
`

type Props = {
  children: React.ReactNode
} & Record<string, unknown>

export default function PhaseButton({ children, ...props }: Props): JSX.Element {
  return (
    <button className={phaseButtonCss} {...props}>
      {children}
    </button>
  )
}
