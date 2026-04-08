// import { useState } from 'react';

import { createProduct } from '@/api/products.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function CreateProduct() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending, IsError } = useMutation({
    mutationFn: createProduct(),

    onSuccess: (data) => {
      alert('Product created successfully');
      navigate('/admin/products');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  return (
    <div className="flex flex-col gap-1 py-10 bg-[#0E172B]">
      {/* Header card */}
      <div className="flex items-center gap-3 px-3 py-3 mb-2 rounded-lg bg-slate-800/60 border border-slate-700/40">
        <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-white">+</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white">Post New Product</p>
          <p className="text-xs text-violet-400 font-medium">Fill in the details below</p>
        </div>
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-3 mb-1">Product Details</p>

      {/* Title field */}
      <div className="px-3 mb-2">
        <label className="block text-xs text-slate-400 font-medium mb-1">Title</label>
        <input
          type="text"
          placeholder="e.g. The Unicorn"
          className="w-full bg-slate-800 border border-slate-700 text-slate-100 text-sm rounded-lg px-3 py-2 
                     placeholder-slate-600 focus:outline-none focus:border-violet-500 
                     focus:ring-1 focus:ring-violet-500/40 transition-colors duration-200"
        />
      </div>

      {/* Desc field */}
      <div className="px-3 mb-3">
        <label className="block text-xs text-slate-400 font-medium mb-1">Description</label>
        <textarea
          rows={3}
          placeholder="e.g. They exist!"
          className="w-full bg-slate-800 border border-slate-700 text-slate-100 text-sm rounded-lg px-3 py-2
                     placeholder-slate-600 focus:outline-none focus:border-violet-500 
                     focus:ring-1 focus:ring-violet-500/40 transition-colors duration-200 resize-none"
        />
      </div>

      {/* Error */}
      {/* {error && <p className="px-3 text-xs text-red-400 mb-2">{error}</p>} */}

      {/* Submit */}
      <button
        className="flex items-center gap-3 mx-3 px-3 py-2.5 rounded-lg text-sm font-medium
                   bg-violet-600 text-white hover:bg-violet-500 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors duration-200"
      >
        <span className="shrink-0 text-base">→</span>
        {/* <span>{loading ? 'Posting...' : 'Post Product'}</span> */}
      </button>
      {/* Clear */}
      <button
        className="flex items-center gap-3 px-3 py-2 mx-3 rounded-lg text-xs font-medium 
                   text-slate-500 hover:text-slate-300 transition-colors duration-200 mt-1"
      >
        Clear form
      </button>
    </div>
  );
}
