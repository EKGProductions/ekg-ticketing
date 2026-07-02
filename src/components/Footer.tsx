// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 pt-12 pb-6 px-6">
      
      {/* MAIN FOOTER CONTENT: Dito yung 3 columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-xl font-bold text-[#F7FF00] mb-4">EKG PRODUCTIONS</h2>
          <p className="text-gray-400 text-sm">40th Floor, Summit One Tower, Shaw Blvd, Mandaluyong City, 1553 Metro Manila</p>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h3 className="font-bold text-white mb-4">Contact for Inquiries & Sponsorships</h3>
          <p className="text-gray-400 text-sm mb-2">📞 +63 912 345 6789</p>
          <p className="text-gray-400 text-sm">📧 inquiries@ekgproductions.com</p>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h3 className="font-bold text-white mb-4">Connect With Us</h3>
          <div className="flex gap-6">
            <Link href="https://www.facebook.com/EKGProductions" className="text-gray-400 hover:text-[#F7FF00]"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></Link>
            <Link href="https://www.instagram.com/ekgproductions/" className="text-gray-400 hover:text-[#F7FF00]"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></Link>
            <Link href="https://www.tiktok.com/@ekgproductions8" className="text-gray-400 hover:text-[#F7FF00]"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89h.88V9.38h-.88a6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.33a8.13 8.13 0 0 0 4.54 1.34v-3.73z"/></svg></Link>
          </div>
        </div>

      </div> {/* DITO NAG-END YUNG 3 COLUMNS NA GRID */}
      
      {/* COPYRIGHT SECTION: Nasa labas ng grid kaya full width siya */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm w-full">
        © 2026 EKG PRODUCTIONS. All Rights Reserved.
      </div>

    </footer>
  );
}