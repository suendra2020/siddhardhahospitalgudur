import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_ARTICLES } from '../data/mockData';
import { Search, Clock, User, ChevronRight, BookOpen } from 'lucide-react';

export const Blog: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Cardiology', 'Orthopaedics', 'Preventive Care'];

  const filteredArticles = BLOG_ARTICLES.filter((art) => {
    const matchesCat = selectedCat === 'All' || art.category === selectedCat;
    const matchesSearch = art.title.toLowerCase().includes(search.toLowerCase()) || art.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full space-y-12 pb-16">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
            Medical Insights & Patient Wellness
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Health Articles & Medical Blog
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Evidence-based medical advice, health tips, and surgical breakthrough insights written by senior hospital doctors.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search health topics, heart care, joint tips..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-800/90 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xl"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                selectedCat === cat
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute bottom-3 left-4 text-xs font-semibold px-3 py-1 bg-blue-600 text-white rounded-lg">
                    {art.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-slate-400">
                    <span>{art.publishDate}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading group-hover:text-blue-600 transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-50 dark:border-slate-800/50 mt-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img src={art.authorAvatar} alt={art.authorName} className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{art.authorName}</span>
                </div>

                <Link
                  to={`/blog/${art.id}`}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1"
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
