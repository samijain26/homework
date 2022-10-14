import React from "react"
const Button = ({ children, onGetQuestion }) => {
  return <button onClick={onGetQuestion}>{children}</button>
}
export default Button
