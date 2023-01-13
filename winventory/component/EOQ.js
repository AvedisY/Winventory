import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
)



export default function EOQgraph() {
    const data = {
        type: 'line',
        datasets: [{
            label: 'Holding Cost',
            backgroundColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                'black'
            ],
            borderColor: [
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)'
            ],
            borderWidth: 1,
            borderColor: "blue"
        }, {
            label: 'Order Cost',
            backgroundColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                'black'
            ],
            borderColor: [
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)'
            ],
            borderWidth: 1,
            borderColor: "blue"
        }, {
            label: 'Total Cost',
            backgroundColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                'black'
            ],
            borderColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.2)'
            ],
            borderWidth: 1,
            borderColor: "blue"
        }]
    }

    const options = {
        
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            line: {
                tension: 0,
                borderWidth: 2,
                borderColor: "white",
                backgroundColor: "white"
            },
            point: {
                radius: 2,
                hitRadius: 10
            }
        },
        scales: {
            x: {
                display: true,
                ticks: {
                    color: "black"
                },
                title: {
                    display: true,
                    text: 'Quantity per Order'
                }
            },
            y: {
                display: true,
                ticks: {
                    color: "black"
                },
                title: {
                    display: true,
                    text: 'Cost'
                }
            }
        }
    }


    function GenerateAllQuantities(QuantityPerOrder) {
        var TotalQuantityPerAmmount = [QuantityPerOrder];
        var AmmountsOfOrder = QuantityPerOrder / 8;
        for (var i = 1; i < 8; i++) {
            let OrderQuantity = TotalQuantityPerAmmount[0] - AmmountsOfOrder;
            TotalQuantityPerAmmount.unshift(OrderQuantity)
        }
        carryingCost(TotalQuantityPerAmmount);
        OrderCost(TotalQuantityPerAmmount);
        TotalCost();
        return data.labels = TotalQuantityPerAmmount;

    }

    function carryingCost(a) {
        let CarryingArray = [];
        for (let i = 0; i < 8; i++) {
            let CostQ = (a[i] / 2);
            CarryingArray.push(CostQ)
        }
        return data.datasets[0].data = CarryingArray;
    }

    function OrderCost(a) {
        let OrderArray = [];
        for (let i = 0; i < 8; i++) {
            let CostQ = (500 / a[i])
            OrderArray.push(CostQ);
        }
        return data.datasets[1].data = OrderArray
    }

    function TotalCost() {
        let Total = []
        for (let i = 0; i < 8; i++) {
            Total.push(data.datasets[0].data[i] + data.datasets[1].data[i])
        }
        return data.datasets[2].data = Total
    }

    GenerateAllQuantities(80)

    return (
        <div>
            <h2 className = "d-flex justify-content-center">EOQ graph</h2>
            <Line
                data={data}
                width={'auto'}
                height={'auto'}
                options={options}
            />
        </div>
    )

}