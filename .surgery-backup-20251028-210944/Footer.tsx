export default function Footer() {
  return (
    <footer className="border-t py-8 text-sm text-center text-gray-500 dark:text-gray-400">
      <div className="max-w-6xl mx-auto px-4">
        © {new Date().getFullYear()} <span className="font-medium">Jutellane Solutions</span>. All rights reserved.
      </div>
    </footer>
  );
}
