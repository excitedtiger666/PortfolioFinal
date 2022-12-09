
import '../App.css'
import { forwardRef, Ref } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import React from 'react';
function Card(props) {


    return (
        <motion.div>
            <a href={props.link}>
                <div className="image-container"><img src={props.image} alt="" /></div>
                <h2>{props.header}</h2>
                <p>{props.caption}</p>
            </a>
        </motion.div>
    );
}

export default Card;
