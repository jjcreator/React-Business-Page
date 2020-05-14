import React from 'react'
import styles from "../../modules/mainStyle.module.css"
import Shape from "../Shape"
import ScrollAnimation from "react-animate-on-scroll"
import ExpandingLine from './ExpandingLine'

function MissionStatement() {
    return (
        <ScrollAnimation animateIn={styles.animated} animateOnce={false} duration={0.4}>
            <section id="ourMission" className={styles.ourMission}>
                <Shape text="Our mission"/>
                <div id={styles.missionStatement}>
                    <p><span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <div id={styles.missionImg}/>
                </div>
                <ExpandingLine animationDuration={0.5} animationDelay={400}/>
            </section>
        </ScrollAnimation>
    )
}

export default MissionStatement
