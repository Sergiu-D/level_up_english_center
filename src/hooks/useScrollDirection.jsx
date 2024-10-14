import { useState, useEffect } from "react";

export const useScrollDirection = (breakpoint = 0.5) => {
  const [isScrollingUp, setIsScrollingUp] = useState(true); // Initial state is true
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset; // Current scroll position
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll percentage
      const scrollPercentage = currentScrollY / (documentHeight - viewportHeight);

      // Detect if the user is scrolling up or down
      if (currentScrollY < lastScrollY) {
        // User is scrolling up
        if (scrollPercentage >= (scrollPercentage - breakpoint) || currentScrollY === 0) {
          setIsScrollingUp(true); // Scrolled up or at the top
        }
      } else if (scrollPercentage > breakpoint) {
        // User is scrolling down past the breakpoint
        setIsScrollingUp(false);
      }

      // Update lastScrollY on every scroll event
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, breakpoint]); // Add lastScrollY and breakpoint as dependencies

  return isScrollingUp;
};
