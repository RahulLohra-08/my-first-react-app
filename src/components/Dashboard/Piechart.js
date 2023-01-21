import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
    label: ['red','blue', 'yellow', 'green', 'purple', 'orange'],

    datasets: [
        {
            label: '# of Votes',
            data: '12, 19, 3, 5, 2, 3',
            backgroundColor: [
                'pink',
                '#001a66',
                '#ff9933',
                '#ff6666',
                '#a6ff4d',
                '#994d00'
            ],
            borderColor: [
                'rgba(255, 99, 71, 0.4)',
                'rgba(255, 99, 71, 0.6)',
                'rgba(255, 99, 71, 0.8)',
                'rgba(255, 99, 71, 1)',
                'rgba(255, 99, 71, 0.4)',
                'rgba(255, 99, 71, 0.4)',
            ],
            borderWidth: 1,
        },
    ],
};

function Piechart() {
  return (
    <>
    <div className="header">
        <div className="links">

        </div>
    </div>
    <Doughnut data={data}/>
    </>
  )
}

export default Piechart