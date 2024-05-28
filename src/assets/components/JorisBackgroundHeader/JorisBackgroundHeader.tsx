import { useState, useEffect } from "react";
import "./joris-background-header.scss";
import Logo from "../../images/joris-bg.png";

function JorisBackgroundHeader() {
  const [shadow, setShadow] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const shadowX = (clientX - centerX) / 50;
      const shadowY = (clientY - centerY) / 50;
      setShadow({ x: shadowX, y: shadowY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <img
        className="jorisImage"
        style={{
          boxShadow: `${shadow.x}px ${shadow.y}px 20px rgba(247, 143, 245, 0.3)`,
        }}
        src={Logo}
        alt=""
      />
    </>
  );
}

export default JorisBackgroundHeader;
