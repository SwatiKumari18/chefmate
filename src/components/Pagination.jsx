import React from 'react';

const Pagination = ({ page, total, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center space-x-4 my-6">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        ← Prev
      </button>
      <span className="self-center text-sm">
        Page {page} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
