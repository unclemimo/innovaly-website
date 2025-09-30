# Changelog

All notable changes to the Innovaly Services website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Hidden the Reviews page from main navigation menu (both desktop and mobile)
- Hidden the Reviews page from footer navigation
- Hidden the Insights page from main navigation menu (both desktop and mobile)
- Hidden the Insights page from footer navigation
- Both reviews and insights pages are not ready for public access

### Details
- Removed "Reviews" link from Header.tsx desktop navigation (line 79)
- Removed "Reviews" link from Header.tsx mobile navigation (lines 144-150)
- Removed "Reviews" link from Footer.tsx Company section (lines 58-62)
- Removed "Insights" link from Header.tsx desktop navigation (line 80)
- Removed "Insights" link from Header.tsx mobile navigation (lines 151-156)
- Removed "Insights" link from Footer.tsx Resources section (lines 102-106)
- The `/reviews` and `/blog` pages still exist but are no longer accessible through navigation

### Technical Notes
- No sitemap configuration was found in the project
- All navigation references to the reviews and insights pages have been removed
- The reviews page file (`/src/app/reviews/page.tsx`) and blog page file (`/src/app/blog/page.tsx`) remain intact for future use
