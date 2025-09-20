'use client';

import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    // Add smooth scrolling behavior
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      .section {
        scroll-margin-top: 2rem;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
}