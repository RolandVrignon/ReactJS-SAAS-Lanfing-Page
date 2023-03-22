import React, { useState, useEffect } from 'react';

const Window = ({ darkMode }) => {
    const phrases = [
        `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.\nFue popularizado en los 60s con la creación de las hojas`,
        `Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.`,
        `El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.`
    ];
  
    const [currentPhrase, setCurrentPhrase] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isAdding, setIsAdding] = useState(true);
    const [isFinished, setIsFinished] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
  
    useEffect(() => {
        let timeout;
        if (isFinished) {
          timeout = setTimeout(() => {
            setIsAdding(false);
            setIsFinished(false);
          }, 2000);
        } else if (isDeleted) {
          timeout = setTimeout(() => {
            setIsAdding(true);
            setIsDeleted(false);
          }, 800);
        } else {
          const delay = isAdding ? 10 : 5;
          timeout = setTimeout(() => {
            if (isAdding) {
              setCurrentPhrase((prev) => prev + phrases[phraseIndex][charIndex]);
              if (charIndex < phrases[phraseIndex].length - 1) {
                setCharIndex((prev) => prev + 1);
              } else {
                setIsFinished(true);
              }
            } else {
              setCurrentPhrase((prev) => prev.slice(0, -1));
              if (charIndex > 0) {
                setCharIndex((prev) => prev - 1);
              } else {
                setIsDeleted(true);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
              }
            }
          }, delay);
        }
        return () => clearTimeout(timeout);
    }, [charIndex, isAdding, isDeleted, isFinished, phraseIndex, phrases]);
  
    const formattedPhrase = currentPhrase.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index !== currentPhrase.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  
    
    return (
        <div className="window">
            <div className={`topbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="left">
                <div className="round" id="one"></div>
                <div className="round" id="two"></div>
                <div className="round" id="three"></div>
            </div>
            <div className="center">
                <p className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>https://chat.openai.com/</p>
            </div>
            <div className="right">

            </div>
            </div>
            <div className={`content ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                <div className="logo">
                    <img src="https://ik.imagekit.io/z0tzxea0wgx/Cogitum/gpt_ledSyzPnn?updatedAt=1679435742407" alt="gpt" />
                </div>
                <div className="text">
                    <span className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>{formattedPhrase}</span>
                </div>
            </div>
        </div>
    )
}

export default Window;