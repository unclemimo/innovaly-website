'use client';

import { useEffect, useRef } from 'react';

/**
 * Senja Proof Page Widget Component
 * 
 * This component loads the Senja testimonial widget immediately for the Proof page.
 * It includes both the script and the embed div for proper rendering.
 * 
 * SEO Considerations:
 * - Loads immediately for better user experience on proof page
 * - Uses proper script loading with async attribute
 * - Includes preconnect for better performance
 * - Isolated CSS to prevent conflicts with existing styles
 * - Only loads on client-side to prevent SSR issues
 */
export default function SenjaProofWidget() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if script is already loaded to prevent duplicates
    if (document.querySelector('script[src*="widget.senja.io/widget/410027a2-9402-4617-ab8a-a81e604ead86"]')) {
      return;
    }

    // Preconnect to Senja's domain for better performance
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://widget.senja.io';
    document.head.appendChild(preconnectLink);

    // Create and configure the script element
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/widget/410027a2-9402-4617-ab8a-a81e604ead86/platform.js';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    
    // Add error handling for better debugging
    script.onerror = (error) => {
      console.warn('Failed to load Senja Proof widget:', error);
    };

    // Add the script to the document head
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Remove the script if component unmounts
      const existingScript = document.querySelector('script[src*="widget.senja.io/widget/410027a2-9402-4617-ab8a-a81e604ead86"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={embedRef}
      className="senja-embed" 
      data-id="410027a2-9402-4617-ab8a-a81e604ead86" 
      data-mode="shadow" 
      data-lazyload="false" 
      style={{ 
        display: 'block', 
        width: '100%',
        // Ensure it doesn't interfere with existing layout
        position: 'relative',
        zIndex: 'auto',
        // Reset any potential CSS conflicts
        margin: '0',
        padding: '0',
        border: 'none',
        background: 'transparent'
      }}
    />
  );
}
