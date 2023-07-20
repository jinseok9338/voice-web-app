import React, { useState, useEffect, ReactNode } from "react";

interface MobileViewDetectorProps {
  children: ReactNode;
}

const MobileViewDetector: React.FC<MobileViewDetectorProps> = ({
  children,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []); // Empty array ensures this effect runs once on mount and clean up on unmount

  if (windowWidth > 428) {
    // 428px is iPhone 14 Pro's width
    return <h1>Please, go back to mobile view</h1>;
  }

  return <>{children}</>;
};

export default MobileViewDetector;
