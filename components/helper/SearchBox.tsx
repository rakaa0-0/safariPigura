"use client"; // Pastikan ini berada di baris pertama jika menggunakan Next.js 13 atau lebih baru
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'; // Pastikan DialogTitle diimpor
import { SearchIcon } from 'lucide-react';

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="cursor-pointer">
          <SearchIcon size={26} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Pencarian</DialogTitle> {/* Tambahkan DialogTitle */}
        <form>
          <input
            type="text"
            placeholder="Pencarian Produk"
            value={searchTerm}
            onChange={handleSearchChange}
            className="block w-full bg-gray-300 rounded-lg px-6 py-2 mt-4 outline-none"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;
