// src/components/Navbar.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);
  const mouseTimeout = useRef(null);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Check if we're at the top of the page
    setIsAtTop(currentScrollY < 50);

    // Determine scroll direction and distance
    const scrollingUp = currentScrollY < lastScrollY.current;
    const scrollDistance = Math.abs(currentScrollY - lastScrollY.current);

    // Update navbar visibility based on scroll behavior
    if (scrollingUp && scrollDistance > 20) {
      setIsVisible(true);
    } else if (!scrollingUp && scrollDistance > 20 && !isAtTop) {
      setIsVisible(false);
    }

    lastScrollY.current = currentScrollY;
  }, [isAtTop]);

  // Throttled mouse position handler
  const handleMouseMove = useCallback((e) => {
    if (mouseTimeout.current) return;

    mouseTimeout.current = setTimeout(() => {
      const isMouseNearTop = e.clientY < 100;
      setIsVisible(isMouseNearTop || isAtTop);
      mouseTimeout.current = null;
    }, 100);
  }, [isAtTop]);

  useEffect(() => {
    // Debounced scroll event listener
    const debouncedScroll = () => {
      if (scrollTimeout.current) {
        window.cancelAnimationFrame(scrollTimeout.current);
      }

      scrollTimeout.current = window.requestAnimationFrame(() => {
        handleScroll();
      });
    };

    // Add event listeners
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Initial position check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (scrollTimeout.current) {
        window.cancelAnimationFrame(scrollTimeout.current);
      }
      if (mouseTimeout.current) {
        clearTimeout(mouseTimeout.current);
      }
    };
  }, [handleScroll, handleMouseMove]);

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <nav 
      className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${
        isAtTop ? 'navbar-at-top' : 'navbar-scrolled'
      }`}
      aria-hidden={!isVisible}
    >
      <div className="navbar-container">
        {navLinks.map(({ href, text }) => (
          <a 
            key={href} 
            href={href}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(href);
              if (element) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            {text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;