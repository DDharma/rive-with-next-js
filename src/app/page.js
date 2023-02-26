"use client"
import {useState} from "react";
import styles from './page.module.css'
import {useRive, useStateMachineInput} from "rive-react"


export default function Home() {
  const STATE_MACHINE = "State Machine 1";
  const HOVER_OFF_ANIMATION = "Hover off"
  const hoverInput = "Hovered"
  const clickInput = "Click"

  // rive components
  const {rive, RiveComponent} = useRive({
      src: "get_quote_button.riv",
      stateMachines: STATE_MACHINE,
      autoplay:true,
  })

  const buttonClickAnimation = () => {
    onClickInput.fire()
  }

  const onClickInput = useStateMachineInput(
      rive,
      STATE_MACHINE,
      clickInput,
      )


  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <RiveComponent
        style={{
          height:300,
          width:500,
        }} 
        onClick= {buttonClickAnimation}
        />
      </div>
    </main>
  )
}
