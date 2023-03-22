import React, { useState, useEffect } from 'react';

const Window = ({ darkMode }) => {
    const phrases = [
        `En tant que modèle de langage de grande envergure, je suis utile pour répondre à des questions, générer du contenu, assister à la recherche, corriger des textes, automatiser des tâches, ou aider à l'apprentissage. En résumé, grâce à ma capacité à comprendre et à générer du langage naturel, je suis un outil polyvalent qui peut être utilisé dans de nombreuses situations où il y a besoin d'une aide pour le traitement de texte ou pour l'analyse de données textuelles.`,
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
          }, 5000);
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
            <div className="topbar">
            <div className="left">
                <div className="round" id="one"></div>
                <div className="round" id="two"></div>
                <div className="round" id="three"></div>
            </div>
            <div className="center">
                <p>https://chat.openai.com/</p>
            </div>
            <div className="right">

            </div>
            </div>
            <div className="content">
                <div className="logo">
                    <img src="https://ik.imagekit.io/z0tzxea0wgx/Cogitum/gpt_ledSyzPnn?updatedAt=1679435742407" alt="gpt" />
                </div>
                <div className="text">
                    <span>{formattedPhrase}</span>
                </div>
            </div>
        </div>
    )
}

export default Window;