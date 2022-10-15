/**  @jsxImportSource @emotion/react*/
import { css } from "@emotion/react"
const Header = ({ text }) => {
  return (
    <header
      css={css`
        h1 {
          font-size: 4rem;
          text-align: center;
        }
      `}
    >
      <h1>{text}</h1>
    </header>
  )
}
export default Header