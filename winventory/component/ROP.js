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

export default function ROPgraph() {
    const data = {
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
                    text: 'Time'
                }
            },
            y: {
                display: true,
                ticks: {
                    color: "black"
                },
                title: {
                    display: true,
                    text: 'Inventory Quantity'
                }
            }
        }
    }


    function GenerateTimeNeeded(AvgUsage, QuantityPerOrder) {
        let DaysNeeded = QuantityPerOrder / AvgUsage;
        DaysNeeded *= 3;
        var TotalTimeCycles = [DaysNeeded];
        DaysNeeded /= 6;
        for(let i = 0; i < 6; i++){
            Cycle = TotalTimeCycles[i] - DaysNeeded;
            TotalTimeCycles.unshift(Cycle) 
        }
        return data.labels = TotalTimeCycles;

    }

    function GenerateQuantityLoss(SS, QuantityPerOrder){
        let QuantityCycle = []
        for(let i = 0; i < 3; i++){
            let QuantityLoss = QuantityPerOrder
            QuantityCycle.push[QuantityLoss];
            if(SS = true){
                QuantityCycle.push(SS);
            }else{
                QuantityCycle.push(0)
            }
        }
        return data.datasets.labels = QuantityCycle;
    }

    function QTY(LeadTime, AvgUsage) {
        ROP = LeadTime*AvgUsage;
        return ROP;
    }



    return (
        <div>
            <h2 className = "d-flex justify-content-center">ROP graph</h2>
            <Line
                data={data}
                width={'auto'}
                height={'auto'}
                options={options}
            />
        </div>
    )

}