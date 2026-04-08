import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage, 
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData = null
}) => {
  const siteTitle = 'Timeless Aesthetics';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Timeless Aesthetics Amritsar offers laser hair removal, HIFU, HydraFacial, Botox, fillers, microblading & bridal aesthetic services.';
  const defaultKeywords = 'Timeless Aesthetics Amritsar, best aesthetic clinic in Amritsar, skin care clinic Amritsar, laser hair removal in Amritsar, HydraFacial Amritsar, Botox treatment Amritsar, dermal fillers Amritsar, HIFU skin tightening Amritsar, acne treatment Amritsar, melasma treatment Amritsar, microblading Amritsar, permanent makeup Amritsar, bridal aesthetic services Amritsar';
  
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const finalCanonicalUrl = canonicalUrl || 'https://www.timelessaestheticss.com/';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:site_name" content={siteTitle} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Additional Meta */}
      <meta name="language" content="en" />
      <meta name="author" content="Timeless Aesthetics" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
