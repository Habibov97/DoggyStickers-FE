import React from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

export default function ProductsDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <div className=" pb-4 border-b border-slate-700">
        <div className="flex justify-start items-center gap-4 font-medium">
          <div>
            <button
              onClick={() => navigate('/admin/products')}
              className="px-4 py-3 rounded-sm bg-violet-600 text-white cursor-pointer"
            >
              Products list
            </button>
          </div>
          <div>
            <button
              onClick={() => navigate('/admin/products/create-product')}
              className="px-4 py-3 rounded-sm bg-violet-600 text-white cursor-pointer"
            >
              Add product
            </button>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
