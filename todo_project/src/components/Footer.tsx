import React from 'react'

import styles from "./Footer.module.css"

const Footer = () => {

  return (

    <footer>
        <p className = {styles.footer}>
            <span> React + TS - Todo Project </span> @ 2022
        </p>
    </footer>

  )

}

export default Footer