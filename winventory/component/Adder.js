import styles from '../styles/try.module.css';
import ReactDOM from "react-dom";
import React, { useState } from "react";
import EOQgraph from './EOQ';
import ROPgraph from './ROP';


export default function Adder() {

    const [showModal, setShowModal] = useState(false);




    const putter = (
        <table className="table table-bordered table-hover user-select-none">
            <tbody className={styles.Table}>
                <tr>
                    <th type='button' scope="row" onClick={() => setPut(<EOQgraph />)} >EOQ</th>
                </tr>
                <tr>
                    <th type='button' scope="row" onClick={() => setPut(<ROPgraph />)}>ROP</th>
                </tr>
                <tr>
                    <th type='button' scope="row" onClick={() => setPut(false)}>Table</th>
                </tr>
                <tr>
                    <th type='button' scope="row" onClick={() => setPut(false)}>ROP+SS</th>
                </tr>
                <tr>
                    <th type='button' scope="row" onClick={() => setPut(false)}>Table+SS</th>
                </tr>
            </tbody>
        </table>
    )

    const [put, setPut] = useState(putter)

    const show = showModal;

    const modalContent = show ? (
        <div className=''>
            <button className={`btn-close ${styles.Close}`} onClick={() =>{setShowModal(false); setPut(putter)}}></button>
            {put}
        </div>
    ) :
        (<button className={styles.Add_Button} onClick={() => setShowModal(true)}>
            <h1 className={styles.Add_Plus}>+</h1>
        </button>);



    return (
        <div className={styles.Adder_Box}>
            <div>
                {modalContent}
            </div>
        </div>
    )
}