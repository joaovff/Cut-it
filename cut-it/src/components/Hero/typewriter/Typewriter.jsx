import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const phrases = [
    "O seu estilo, a nossa paixão",
    "Tradição e inovação em cada corte",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(60); // Adjust typing speed (in milliseconds) here

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const isComplete = !isDeleting && text === currentPhrase;
      const isBackspaceComplete = isDeleting && text === "";

      if (isComplete) {
        // If typing is complete, wait for a few seconds and then start backspacing
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else if (isBackspaceComplete) {
        // If backspacing is complete, move to the next phrase
        const nextPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setCurrentPhraseIndex(nextPhraseIndex);
        setIsDeleting(false);
      }

      // Calculate typing speed based on deleting or typing
      const speed = isDeleting ? typingSpeed / 0 : typingSpeed;

      // Update the text to be displayed
      setText((prevText) => {
        if (isDeleting) {
          return prevText.slice(0, -1);
        } else {
          return currentPhrase.slice(0, prevText.length + 1);
        }
      });
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentPhraseIndex, isDeleting, text, typingSpeed]);

  return (
    <div className="typewriter">
      <h1 className="slogan">{text.toUpperCase()}</h1>
    </div>
  );
};

export default Typewriter;
