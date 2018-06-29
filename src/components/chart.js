import React from "react";
import _ from "lodash";
import {
  Sparklines,
  SparklinesReferenceLine,
  SparklinesLine
} from "react-sparklines";

function average(data) {
  // Return the average of an array of data
  return _.round(_.sum(data) / data.length);
}

export default props => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className="avg-int">
        5 day average: {average(props.data)} {props.units}
      </div>
    </div>
  );
};
