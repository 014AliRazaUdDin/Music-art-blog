'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'
 const  musicschoolContent =[
    {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    
    },
    {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    
    },
    {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    
    },
 ]

function WhyChooseus() {
  return (
    <div >
      <StickyScroll content={musicschoolContent}/>
    </div>
  )
}

export default WhyChooseus
