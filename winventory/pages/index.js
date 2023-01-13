import styles from '../styles/Home.module.css';
import Link from 'next/link';

const placeholder = 'Enter Your Email';

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.Home_Intro}>
        <h1>BIG LOGO</h1>
        <div className={styles.Intro_Msg}>
          <h3>Innovate management</h3>
          <div className={styles.Intro_Buttons}>
            <button type='button'>Try it Out</button>
            <button type='button'>Ask For Demo<i class={styles.arrow}></i></button>
          </div>
        </div>
        </div>
        <div className={styles.Home_Do}>
          <h2>What We Do</h2>
          <div className={styles.Table}>
            <div className={styles.Row}>
                <div className={styles.Box}>
                  <i className={styles.Line_1}></i>
                  <i className={styles.Line_2}></i>
                  <i className={styles.Line_3}></i>
                </div>
              <p>This project is my first demo</p>
            </div>
            <div className={styles.Row}>
                <div className={styles.Box}>
                  <i className={styles.Line_1}></i>
                  <i className={styles.Line_2}></i>
                  <i className={styles.Line_3}></i>
                </div>
              <p>I used it to understand React.js and Next.js 'relationship'</p>
            </div>
            <div className={styles.Row}>
                <div className={styles.Box}>
                  <i className={styles.Line_1}></i>
                  <i className={styles.Line_2}></i>
                  <i className={styles.Line_3}></i>
                </div>
              <p>And also how to include other libraries (chart.js) in projects</p>
            </div>
          </div>
        </div>
        <div className={styles.Try_Page}>
          <h1>Try It Out</h1>
          <div className={styles.Try_Main}>            
              <div className={styles.Try_Demo}>
              <input className={styles.Try_Input} placeholder={placeholder}
              />
              <button type='button' className={styles.Try_Button}>Ask for Demo</button>    
              </div>
              <h1>OR</h1>
              <div className={styles.Try_Online}>
                <h2>Try Online Version</h2>
                <h2 className={styles.Try_Here}>HERE</h2>
              </div>
          </div>
        </div>

    </div>
  )
}
