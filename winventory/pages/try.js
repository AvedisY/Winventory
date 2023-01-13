import styles from '../styles/try.module.css';
import Graph from '../component/Graph';
import Adder from '../component/Adder';
import React, { useEffect, useState } from 'react';



export default function Try() {
    const [isChecked, setIsChecked] = useState(false);


    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={styles.container}>
            <h1>Title</h1>
            <p>This was supposed to be a simulation that linked many of the used components into one page and made use of Chart.js, personalized modals, Bootstrap, and a submit form made with Next.js and React.js, however since I started wokring on it, the page seemed inefficient and a better way to create it came up, so it was left without the possibility to submit any non-server data to the page, and lacks the necessary links and hooks to create personalized charts.            </p>
            <p>This simply became a stepping stone for my next project to better understand and use the "useContext" hook.</p>
            <div className={styles.All}>
                <div className={styles.Add_Box}>
                    <Adder />
                    <Adder />
                    <Adder />
                </div>
                <div className={styles.Boxer_Container}>
                    <form className={styles.Boxer}>
                        <h1>Fill In</h1>
                        <div className={styles.Form_Inputs}>
                            <div className={styles.Form_Fill}>
                                <h3>Annual Demand</h3>
                                <input onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }} />
                            </div>
                            <div className={styles.Form_Fill}>
                                <h3>Cost per Demand</h3>
                                <input onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }} />
                            </div>
                            <div className={styles.Form_Fill}>
                                <h3>Volume per Order</h3>
                                <input onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }} />
                            </div>
                            <div className={styles.Form_Fill}>
                                <h3>Annual Holding Cost</h3>
                                <input onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }} />
                            </div>
                            <div className={styles.Form_Fill}>
                                <h3>Average Lead Time</h3>
                                <input onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }} />
                            </div>
                            <div className={styles.Form_Fill}>
                                <h3>Average Daily Usage</h3>
                                <input onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }} />
                            </div>
                            <div className={styles.Form_Check}>
                                <div>
                                    <h5>I have Safety Stocks:</h5>
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value=" "
                                        checked={isChecked}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className={isChecked ? styles.unchecked : styles.checked}>
                                    <h3 >SS Quantity:</h3>
                                    <input onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }} />
                                </div>
                            </div>

                        </div>
                        <button type="button" className="btn btn-outline-dark btn-lg" >Submit</button>
                    </form>

                    <div>
                        <div className={styles.Boxer2}>
                                    <Graph Present={isChecked} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}