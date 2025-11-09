export const config = {
  // Match everything EXCEPT the excluded paths & file types
  matcher: [
    '/((?!' +
      '_next/static|' +
      '_next/image|' +
      'favicon\\.ico|' +
      'robots\\.txt|' +
      'sitemap\\.xml|' +
      // static folders
      'images/|' +
      'img/|' +
      'assets/|' +
      'public/|' +
      // PDFs & other static docs
      'docs/|' +
      // common file extensions we never want middleware on
      '.*\\.(?:png|jpg|jpeg|svg|webp|gif|ico|pdf|txt|json|webmanifest)$' +
    ').*)',
  ],
};
