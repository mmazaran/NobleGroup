# Images & Assets Directory

This directory contains all images and assets used throughout the Noble Group website.

## Folder Structure

- **`logo/`** - Company logos and branding assets
  - Main logo image
  - Favicon (if needed)

- **`about/`** - Images for the About page
  - Hero background images
  - Team member photos
  - Strategy session images

- **`testimonials/`** - Client testimonial photos
  - Profile pictures for testimonials

- **`case-studies/`** - Case study thumbnails and images
  - Video thumbnails
  - Project images

- **`hero/`** - Hero section images
  - Main hero backgrounds

- **`features/`** - Feature section images
  - Service showcase images
  - Background images for feature cards

## Usage

In Vite projects, files in the `public` folder are served at the root path. 

To reference an image in this folder, use:
```tsx
<img src="/images/logo/noble-logo.png" alt="Noble Group" />
```

Or in CSS:
```css
background-image: url('/images/hero/hero-background.jpg');
```

## Image Guidelines

- Use optimized formats (WebP when possible, fallback to JPG/PNG)
- Keep file sizes reasonable for web performance
- Recommended max dimensions:
  - Hero images: 2000px width
  - Thumbnails: 800px width
  - Logos: 500px width
  - Profile photos: 600px width
