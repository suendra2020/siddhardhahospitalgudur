import React, { useState } from 'react';
import { Star, MapPin, CheckCircle2, MessageSquare, ThumbsUp, Filter, Building } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/mockData';

export const GoogleReviewsSection: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'Most relevant' | 'Newest' | 'Highest rating'>('Most relevant');

  const allReviews = [
    {
      id: 'r1',
      author: 'Himabindu',
      reviewCountText: '2 reviews',
      timeAgo: 'a year ago',
      rating: 5,
      content: 'I recently visited Siddhardha Multispeciality Hospital in Gudur and was truly impressed by the quality of care and professionalism displayed by the entire staff. From the reception to the medical team, everyone was incredibly supportive, attentive, and caring.',
      likes: 3,
      tags: ['caring staff', 'hygiene', 'efficient staff']
    },
    {
      id: 'r2',
      author: 'swayam arugunta',
      reviewCountText: '1 review',
      timeAgo: 'a year ago',
      rating: 5,
      content: 'I had an excellent experience at Siddhardha Multispeciality Hospital in Gudur. The hospital is clean, well-maintained, and offers top-notch medical services. The doctors are highly knowledgeable and take the time to explain everything clearly.',
      likes: 2,
      tags: ['hygiene', 'efficient staff']
    },
    {
      id: 'r3',
      author: 'Pradeep Pandu1121',
      reviewCountText: '4 reviews · 2 photos',
      timeAgo: 'Edited 9 months ago',
      rating: 5,
      content: 'Best hospital sir! Sontha family la treat chestaru, hospital staff kuda chaala bhaga chusukunta ru, low price lo best treatment estaru. (Treats like own family, hospital staff takes great care, best treatment at low cost).',
      likes: 5,
      tags: ['reasonable cost', 'caring staff', 'efficient staff']
    },
    {
      id: 'r4',
      author: 'Devi Reddy',
      reviewCountText: '3 reviews',
      timeAgo: 'a year ago',
      rating: 5,
      content: 'I have been to this hospital for treatment and was completely satisfied with the service. The doctors were very considerate and patient during the process and made sure we recovered completely. Right from discovering the root cause, everything was handled masterfully.',
      likes: 2,
      tags: ['caring staff', 'efficient staff']
    },
    {
      id: 'r5',
      author: 'nagarjuna reddy',
      reviewCountText: 'Local Guide · 13 reviews · 15 photos',
      timeAgo: 'a year ago',
      rating: 5,
      content: 'Excellent care and attention through out diagnosis. Cost is very much affordable with top class service. Clean and hygienic hospital.',
      likes: 1,
      tags: ['reasonable cost', 'hygiene', 'caring staff']
    },
    {
      id: 'r6',
      author: 'Varshitha Pemmareddy',
      reviewCountText: '3 reviews',
      timeAgo: 'a year ago',
      rating: 5,
      content: 'Very good hospital with excellent doctors and caring staff. Clean facilities and quick service. Highly recommended in Gudur!',
      likes: 1,
      tags: ['caring staff', 'hygiene', 'efficient staff']
    },
    {
      id: 'r7',
      author: 'lakshmi sudha reddy',
      reviewCountText: '6 reviews',
      timeAgo: 'a year ago',
      rating: 5,
      content: 'Providing best corporate services with nominal fee in all departments. Highly satisfied with the medical expertise.',
      likes: 2,
      tags: ['reasonable cost', 'efficient staff']
    },
    {
      id: 'r8',
      author: 'Aruguntareddy Reddy',
      reviewCountText: '5 reviews',
      timeAgo: 'a year ago',
      rating: 5,
      content: 'This is my very 1st visit to Siddhardha hospital and found the staff very warm, Attentive and Quick responding.',
      likes: 1,
      tags: ['efficient staff', 'caring staff']
    },
    {
      id: 'r9',
      author: 'Rohith Reddy',
      reviewCountText: 'Local Guide · 43 reviews · 25 photos',
      timeAgo: 'a year ago',
      rating: 5,
      content: 'Excellent treatment. Worth visiting!',
      likes: 3,
      tags: ['caring staff']
    },
    {
      id: 'r10',
      author: 'Yashwanth Kallu Vision',
      reviewCountText: '2 reviews',
      timeAgo: '5 months ago',
      rating: 5,
      content: 'Excellent service & Diagnosis & Very good Ambience',
      likes: 1,
      tags: ['hygiene', 'efficient staff']
    },
    {
      id: 'r11',
      author: 'Subbu Vasu',
      reviewCountText: '4 reviews',
      timeAgo: 'a year ago',
      rating: 5,
      content: 'Im very happy to visiting Siddhartha multy specialty hospital at gdr. Their gives good treatment for all disease. And good faculty, and atmosphere with doctors. Staff very nice.',
      likes: 1,
      tags: ['caring staff', 'hygiene']
    }
  ];

  const filteredReviews = activeTag === 'All'
    ? allReviews
    : allReviews.filter(r => r.tags.includes(activeTag));

  return (
    <section className="bg-slate-50 dark:bg-slate-900/60 py-16 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Title & Google Score Header */}
        <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <span className="p-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-black rounded-xl text-lg">G</span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Google Reviews</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
              SIDDHARDHA MULTISPECIALITY HOSPITAL
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs text-slate-600 dark:text-slate-300">
              <MapPin className="w-4 h-4 text-[#E52320] shrink-0" />
              <span>{HOSPITAL_INFO.address}</span>
            </div>
          </div>

          {/* Rating Summary Box */}
          <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-center shrink-0 min-w-[220px]">
            <span className="text-4xl font-extrabold text-slate-900 dark:text-white font-heading">4.5</span>
            <div className="flex items-center justify-center space-x-1 text-amber-400 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">528 Google Reviews</p>
            <span className="inline-block mt-2 px-3 py-0.5 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold rounded-full border border-emerald-300 dark:border-emerald-800">
              ✓ Verified Healthcare Organization
            </span>
          </div>

        </div>

        {/* Filter Tags Bar */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
            <Filter className="w-3.5 h-3.5 text-[#E52320]" />
            <span className="font-bold uppercase tracking-wider">Filter Reviews by Topic:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All', count: 528 },
              { label: 'efficient staff', count: 2 },
              { label: 'reasonable cost', count: 2 },
              { label: 'hygiene', count: 3 },
              { label: 'caring staff', count: 4 },
            ].map((t) => (
              <button
                key={t.label}
                onClick={() => setActiveTag(t.label)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                  activeTag === t.label
                    ? 'bg-[#E52320] text-white border-[#E52320] shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#E52320]'
                }`}
              >
                {t.label} <span className="opacity-75">({t.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-3.5 hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm font-heading">{rev.author}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{rev.reviewCountText} • {rev.timeAgo}</p>
                  </div>
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                <div className="flex flex-wrap gap-1">
                  {rev.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md text-[10px] font-semibold">
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="flex items-center space-x-1 text-red-500 font-bold">
                  <ThumbsUp className="w-3 h-3" />
                  <span>{rev.likes}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
