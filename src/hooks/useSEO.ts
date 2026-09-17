import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  canonicalPath?: string;
  structuredData?: Record<string, unknown>;
}

/**
 * useSEO: Dynamically injects meta tags, Open Graph cards, Twitter cards,
 * canonical URLs, and Schema.org JSON-LD structured data per route.
 */
export function useSEO({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage,
  canonicalPath,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // 1. Format and set page title
    const formattedTitle = title.includes('ALABSGOLD')
      ? title
      : `${title} | ALABSGOLD — Digital Infrastructure Studio`;
    document.title = formattedTitle;

    // Helper function to safely set or create meta elements
    const setMeta = (attributeName: 'name' | 'property', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attributeName}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Standard Search Meta
    setMeta('name', 'description', description);
    if (keywords && keywords.length > 0) {
      setMeta('name', 'keywords', keywords.join(', '));
    }

    // 3. Resolve Current Canonical URL
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : 'https://alabsgold.com.ng';

    const currentUrl = canonicalPath
      ? `${origin}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
      : typeof window !== 'undefined'
      ? window.location.href
      : origin;

    // 4. OpenGraph Metadata
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', currentUrl);
    setMeta('property', 'og:site_name', 'ALABSGOLD Studio');

    if (ogImage) {
      setMeta('property', 'og:image', ogImage);
    }

    // 5. Twitter / X Card Metadata
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', description);
    if (ogImage) {
      setMeta('name', 'twitter:image', ogImage);
    }

    // 6. Canonical Link Element
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', currentUrl);

    // 7. Schema.org JSON-LD Structured Data
    const scriptId = 'alabsgold-schema-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, keywords, ogType, ogImage, canonicalPath, structuredData]);
}
