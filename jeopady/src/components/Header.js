// @jsxImportSource @emotion/react
import { css } from "@emotion/react"
const Header = ({ text }) => {
  return (
    <header
      css={css`
        h1 {
          font-size: 2rem;
        }
      `}
    >
      <h1>{text}</h1>
    </header>
  )
}
export default Header