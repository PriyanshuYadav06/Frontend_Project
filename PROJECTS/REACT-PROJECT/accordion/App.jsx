import React, { useState } from 'react'
import Accordion from './components/Accordion'
import '/App.css'
export default function App() {
  const [isActive, setIsActive] = useState(null);
  function toggleisActive(index) {
    setIsActive(index);
  };
  return (
    <div className='Container'>
        <Accordion
        index={1}
        innertxt="Do I have to allow the use of cookies?"
        answer="Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
        isActive={isActive}
        toggleisActive={toggleisActive}
        isOpen={isActive === 1}
         />
        <Accordion
        index={2}
        innertxt="How do I change my My Page password?"
        answer="Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."
        isActive={isActive}
        toggleisActive={toggleisActive}
        isOpen={isActive === 2}
         />
        <Accordion
        index={3}
        innertxt="What is BankID?"
        answer="Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."
        isActive={isActive}
        toggleisActive={toggleisActive}
        isOpen={isActive === 3}
         />
        <Accordion
        index={4}
        innertxt="Whose birth number can I use?"
        answer="Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."
        isActive={isActive}
        toggleisActive={toggleisActive}
        isOpen={isActive === 4}
         />
        <Accordion
        index={5}
        innertxt="When do I recieve a password ordered by letter?"
        answer="Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."
        isActive={isActive}
        toggleisActive={toggleisActive}
        isOpen={isActive === 5}
         />
    </div>
  )
}
