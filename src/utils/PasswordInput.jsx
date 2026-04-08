import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function PasswordInput({ id, name, placeholder, register, error }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="relative">
        <input
          id={id}
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          {...register(name)}
          className="w-full bg-slate-800/60 border border-slate-700/60 text-slate-200
                     placeholder:text-slate-500 text-sm rounded-lg px-4 py-2.5 pr-10
                     focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500
                     transition-all duration-200"
        />
        <button
          type="button"
          onClick={() => setShow((p) => !p)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 
                     hover:text-slate-300 transition-colors"
        >
          {show ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
        </button>
      </div>
      {error && <p className="text-red-400 text-xs mt-1.5">{error.message}</p>}
    </div>
  );
}
