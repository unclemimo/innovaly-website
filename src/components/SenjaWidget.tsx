'use client';

import { useEffect, useState } from 'react';

/**
 * Senja Testimonial Widget Component
 * 
 * This component loads the Senja testimonial widget with a 15-second delay
 * to improve page load performance and user experience.
 * 
 * SEO Considerations:
 * - Loads asynchronously to not block critical rendering
 * - Uses proper script loading with async attribute
 * - Implements delay to avoid interfering with Core Web Vitals
 * - Only loads on client-side to prevent SSR issues
 */
export default function SenjaWidget() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set up the 15-second delay timer
    const timer = setTimeout(() => {
      loadSenjaWidget();
      setIsLoaded(true);
    }, 15000); // 15 seconds delay

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const loadSenjaWidget = () => {
    // Check if script is already loaded to prevent duplicates
    if (document.querySelector('script[src*="widget.senja.io"]')) {
      return;
    }

    // Preconnect to Senja's domain for better performance
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://widget.senja.io';
    document.head.appendChild(preconnectLink);

    // Create and configure the script element
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/widget/42ccc681-4b85-49f7-b023-119c8ba36f64/platform.js';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true; // Additional SEO optimization
    
    // Add error handling for better debugging
    script.onerror = (error) => {
      console.warn('Failed to load Senja widget:', error);
    };

    // Add the script to the document head
    document.head.appendChild(script);
  };

  // Don't render anything until the widget is loaded
  // This prevents any layout shift and maintains clean HTML
  if (!isLoaded) {
    return null;
  }

  return null; // The widget renders itself via the script
}
