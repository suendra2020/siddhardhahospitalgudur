import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_ARTICLES } from '../data/mockData';
import { ArrowLeft, Clock, Calendar, Share2, Tag } from 'lucide-react';

export const BlogSingle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = BLOG_ARTICLES.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold">Article Not Found</h2>
        <button onClick={() => navigate('/blog')} className="px-6 py-2 bg-blue-600 text-white rounded-xl">
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="w-full space-y-12 pb-16">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-400 hover:underline mb-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Health Articles</span>
          </Link>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800 block w-fit">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center space-x-4 pt-2 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <img src={article.authorAvatar} alt={article.authorName} className="w-8 h-8 rounded-full object-cover" />
              <div>
                <p className="font-bold text-white">{article.authorName}</p>
                <p className="text-[11px] text-slate-400">{article.authorRole}</p>
              </div>
            </div>
            <span>•</span>
            <span>{article.publishDate}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-8 bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md">
          <img src={article.image} alt={article.title} className="w-full h-80 object-cover rounded-2xl" />
          
          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-4 whitespace-pre-line">
            {article.content}
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
            <span className="text-xs font-bold text-slate-400 mr-2 flex items-center">
              <Tag className="w-3.5 h-3.5 mr-1" /> Tags:
            </span>
            {article.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-lg">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
