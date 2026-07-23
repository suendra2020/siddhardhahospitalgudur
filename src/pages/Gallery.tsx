import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Eye, X, Play, Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Operation Theatre', 'Infrastructure', 'ICU & Rooms', 'Diagnostics'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full space-y-12 pb-16">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
            Hospital Tour & Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Hospital Gallery & Virtual Tour
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of our 500-bed health city tower, robotic surgical suites, presidential patient rooms, and advanced diagnostic labs.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative h-64 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <h4 className="font-bold text-sm font-heading">{item.title}</h4>
                <p className="text-[11px] text-slate-300 line-clamp-1">{item.caption}</p>
              </div>

              <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Preview Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] overflow-hidden">
              <img src={activeLightbox.imageUrl} alt={activeLightbox.title} className="w-full h-full object-contain max-h-[70vh]" />
            </div>
            <div className="p-6 bg-slate-900 text-white space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{activeLightbox.category}</span>
              <h3 className="text-xl font-bold font-heading">{activeLightbox.title}</h3>
              <p className="text-xs text-slate-300">{activeLightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
