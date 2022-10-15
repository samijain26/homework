/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React from 'react'

const Stats = ({ stats }) => {
    const value = stats[0]?.value
  return (
    
    <div
      css={css`
        margin-bottom: 2rem;
        span {
          font-weight: 400;
          color: var(--color-grey-dark);
        }
        @media screen and (min-width: 768px) {
          display: flex;
          justify-content: space-between;
        }
      `}
    >
      <h3>Category:{stats[0]?.category.title} </h3>
      <h3>value:{value ? value :'No Value'} </h3>
    </div>
  )
}

export default Stats