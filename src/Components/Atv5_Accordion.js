/*
import { useState } from 'react';

 
export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <div class="container">
            <br></br>
            <p><b>Accordion</b></p>
            <p>Almaty, Kazakhstan</p>
            <Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
            Texto texto texto texto texto texto texto 
            texto texto texto texto texto texto texto texto.      
            </Panel>
            <Panel
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
            Texto2 texto <span lang="kk-KZ">aa</span>texto texto texto texto texto2 
            texto2 texto texto texto texto texto texto texto2.  
            </Panel>
        </div>
    );
}

function Panel({
    title,
    children,
    isActive,
    onShow
}) {
    return (
        <section className='panel'>
            <p>{title}</p>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={{onShow}}>
                    Show
                </button>
            )}
        </section>
    );
}
*/

import { useState } from 'react';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <p><b>{title}</b></p>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <div className='container'>
      <h1><b>Accordion</b></h1>
      <p>Almaty, Kazakhstan</p>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
}
