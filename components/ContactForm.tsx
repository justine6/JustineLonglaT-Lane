'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up submit
  };

  return (
    <form onSubmit={onSubmit} className='space-y-4 text-left'>
      <div className='grid sm:grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm mb-1'>Name</label>
          <input
            className='w-full border rounded-md px-3 py-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <button type='submit' className='px-4 py-2 rounded-md border'>
        Send
      </button>
    </form>
  );
}
