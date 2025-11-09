Harden PDF delivery:
- Serve PDFs from /files with Content-Disposition: inline
- Added 308 redirect from /docs/brochure.pdf → /files/brochure.pdf
- Minimal middleware with matcher that excludes /files and /docs
- Verified 200 + pplication/pdf and 206 Partial Content (range) in prod
