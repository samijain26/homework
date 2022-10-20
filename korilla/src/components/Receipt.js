import React from "react";

export default function Receipt({ data ,updatePaid}) {
    if (!data.paid) {
        return (
          <div>
            <div className="verticle" onClick={() => updatePaid(data.person)}>
              <h2>{data.person}</h2>
              <h3>main:{data.order.main}</h3>
              <h3>protein:{data.order.rice}</h3>
              <h3>rice:{data.order.protein}</h3>
              <h3>sauce:{data.order.sauce}</h3>
              <h3>drink:{data.order.drink}</h3>
              <h3>cost:{data.order.cost}</h3>
            </div>
          </div>
        );
    }
}