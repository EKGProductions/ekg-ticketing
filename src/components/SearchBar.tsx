// src/components/SearchBar.tsx
"use client";

export default function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search for concerts, venues, or artists..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-4 bg-gray-900 text-white border border-gray-700 rounded-xl focus:outline-none focus:border-[#F7FF00] focus:ring-1 focus:ring-[#F7FF00] transition-all"
      />
    </div>
  );
}