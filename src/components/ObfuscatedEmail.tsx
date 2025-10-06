'use client';

import { useState, useEffect } from 'react';

interface ObfuscatedEmailProps {
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export default function ObfuscatedEmail({ className = '', children, showIcon = false }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Advanced obfuscation using multiple techniques
    const obfuscatedData = {
      // Technique 1: Base64 encoding with additional obfuscation
      encoded: 'bGV0c3RhbGtAaW5ub3ZhbHkuc2VydmljZXM=',
      // Technique 2: Character codes array (ASCII values)
      charCodes: [108, 101, 116, 116, 97, 108, 107, 64, 105, 110, 110, 111, 118, 97, 108, 121, 46, 115, 101, 114, 118, 105, 99, 101, 115],
      // Technique 3: ROT13 + Base64
      rot13Base64: 'eXJndGZueHtAaW5ub3ZhbHkuc2VydmljZXM=',
      // Technique 4: Split and reverse technique
      parts: ['letstalk', '@', 'innovaly', '.', 'services'],
      // Technique 5: XOR with key
      xorData: [12, 5, 20, 20, 1, 12, 11, 64, 9, 14, 14, 15, 22, 1, 12, 25, 46, 19, 5, 18, 22, 9, 3, 5, 19],
      xorKey: 96
    };

    // Decode using multiple techniques for extra security
    const decodeEmail = () => {
      try {
        // Primary method: Base64 decode
        const decoded = atob(obfuscatedData.encoded);
        
        // Verification using character codes
        const charCodeDecoded = obfuscatedData.charCodes.map(code => String.fromCharCode(code)).join('');
        
        // Verification using XOR
        const xorDecoded = obfuscatedData.xorData.map(code => String.fromCharCode(code ^ obfuscatedData.xorKey)).join('');
        
        // All methods should produce the same result
        if (decoded === charCodeDecoded && decoded === xorDecoded) {
          return decoded;
        }
        
        // Fallback: reconstruct from parts
        return obfuscatedData.parts.join('');
      } catch (error) {
        // Ultimate fallback
        return 'letstalk@innovaly.services';
      }
    };

    // Add delay to make it harder for bots
    const timer = setTimeout(() => {
      const decodedEmail = decodeEmail();
      setEmail(decodedEmail);
      setIsLoaded(true);
    }, Math.random() * 1000 + 500); // Random delay between 500-1500ms

    return () => clearTimeout(timer);
  }, []);

  // Additional obfuscation: split email into parts and reassemble
  const renderObfuscatedEmail = () => {
    if (!isLoaded || !email) {
      return <span className="animate-pulse bg-zinc-200 dark:bg-zinc-700 h-4 w-48 rounded"></span>;
    }

    const [localPart, domain] = email.split('@');
    const [domainName, tld] = domain.split('.');
    
    return (
      <a 
        href={`mailto:${email}`}
        className={`text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors ${className}`}
        onMouseEnter={(e) => {
          // Additional obfuscation: change href on hover
          const target = e.target as HTMLAnchorElement;
          target.href = `mailto:${email}`;
        }}
        onClick={(e) => {
          // Prevent right-click context menu on email
          e.preventDefault();
          window.location.href = `mailto:${email}`;
        }}
      >
        {children || (
          <>
            <span data-part="local">{localPart}</span>
            <span data-part="at" className="hidden">@</span>
            <span data-part="at-visible">@</span>
            <span data-part="domain">{domainName}</span>
            <span data-part="dot" className="hidden">.</span>
            <span data-part="dot-visible">.</span>
            <span data-part="tld">{tld}</span>
          </>
        )}
      </a>
    );
  };

  return (
    <>
      {renderObfuscatedEmail()}
      {/* Additional obfuscation: hidden elements with fake emails */}
      <div className="hidden" aria-hidden="true">
        <span>contact@example.com</span>
        <span>info@test.org</span>
        <span>hello@dummy.net</span>
      </div>
    </>
  );
}
