import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Fonction pour mettre à jour les dimensions
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Ajoute un écouteur d'événements pour "resize"
    window.addEventListener("resize", handleResize);

    // Appelle handleResize une fois au montage pour initialiser les dimensions
    handleResize();

    // Nettoie l'écouteur d'événements au démontage
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
export default useWindowSize;
