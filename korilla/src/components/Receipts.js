import React from 'react'
import Receipt from './Receipt'
export default function Receipts({ receipts, updatePaid }) {
 
  return (
    <div>
      {receipts.map((receipt) => {
       
        return (
          <Receipt
            key={receipt.person}
            data={receipt}
            updatePaid={updatePaid}
          />
        );
      })}
    </div>
  );
}
