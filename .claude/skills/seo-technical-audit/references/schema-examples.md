# Schema Markup Examples (JSON-LD)

All examples use JSON-LD format. Place inside `<script type="application/ld+json">` in the `<head>` of each page.

---

## LocalBusiness (Homepage or Contact Page)

```json
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Your Business Name",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "description": "Brief description of the business",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "info@yourdomain.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 0.000,
    "longitude": 0.000
  },
  "sameAs": [
    "https://www.facebook.com/yourbusiness",
    "https://www.instagram.com/yourbusiness",
    "https://www.tripadvisor.com/Profile/YourBusiness"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-18:00"
}
```

---

## Organization (Sitewide Brand Signals)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Business Name",
  "url": "https://yourdomain.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://yourdomain.com/logo.png",
    "width": 250,
    "height": 80
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service",
    "availableLanguage": "English",
    "areaServed": "US"
  },
  "sameAs": [
    "https://www.facebook.com/yourbusiness",
    "https://www.instagram.com/yourbusiness"
  ]
}
```

---

## TouristTrip (Tour/Package Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "10-Day Nile Cruise & Cairo Tour",
  "description": "Full description of the tour itinerary and what's included",
  "touristType": ["Leisure", "Culture", "Adventure"],
  "itinerary": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "TouristAttraction",
          "name": "Cairo — Pyramids of Giza",
          "description": "Visit the last remaining wonder of the ancient world"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "TouristAttraction",
          "name": "Luxor — Valley of the Kings",
          "description": "Explore the royal tombs of ancient pharaohs"
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "price": "1895",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://yourdomain.com/tours/10-day-nile-cruise",
    "validFrom": "2025-01-01"
  },
  "provider": {
    "@type": "TravelAgency",
    "name": "Your Business Name",
    "url": "https://yourdomain.com"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

---

## Review Snippet (Tour Pages with Reviews)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "10-Day Nile Cruise & Cairo Tour",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "John D."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Incredible experience. Our guide was knowledgeable and the itinerary was perfectly paced.",
      "datePublished": "2025-03-15"
    }
  ]
}
```

---

## FAQPage (FAQ Sections on Tour or Blog Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Egypt safe for American tourists in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Egypt's tourist sites have heavy security presence and millions of Americans visit each year without incident. The US State Department currently rates Egypt at Level 2 (Exercise Normal Precautions) for most areas tourists visit. We recommend avoiding the Sinai Peninsula outside of Sharm el-Sheikh and the Libyan border region."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the tour price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All accommodation, domestic transfers, airport pickups, professional English-speaking guide, and entrance fees to all listed sites are included. International flights and travel insurance are not included."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a visa to visit Egypt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "US citizens can obtain a tourist e-visa online at visa2egypt.gov.eg for $25 USD. We recommend applying at least 2 weeks before travel. We assist all clients with the visa application process."
      }
    }
  ]
}
```

---

## BreadcrumbList (All Interior Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yourdomain.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Egypt Tours",
      "item": "https://yourdomain.com/tours/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "10-Day Nile Cruise & Cairo",
      "item": "https://yourdomain.com/tours/10-day-nile-cruise/"
    }
  ]
}
```

---

## Article (Blog Posts)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Is Egypt Safe for American Tourists in 2025? A Realistic Guide",
  "description": "Honest assessment of safety, US State Dept advisories, and what travelers actually experience",
  "image": "https://yourdomain.com/images/egypt-safety-guide.jpg",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://yourdomain.com/about/author-name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Your Business Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourdomain.com/logo.png"
    }
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-03-20",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yourdomain.com/blog/is-egypt-safe-for-american-tourists/"
  }
}
```

---

## Combining Multiple Schema Types

You can have multiple JSON-LD blocks on a single page, or use an array:

```json
[
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "10-Day Nile Cruise"
    // ... tour details
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // ... FAQ items
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      // ... breadcrumbs
    ]
  }
]
```

---

## Validation

Always test schema with: **search.google.com/test/rich-results**

Common errors:
- Missing required fields (check Google's documentation for each type)
- Wrong field names (camelCase matters: `ratingValue` not `rating_value`)
- Rating outside valid range
- URLs that return 404
