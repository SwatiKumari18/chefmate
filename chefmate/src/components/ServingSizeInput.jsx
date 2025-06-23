import React from 'react';

const ServingSizeInput = ({ servings, onChange }) => (
  <div className="flex items-center space-x-2">
    <label className="text-sm">Servings:</label>
    <input
      type="number"
      min="1"
      value={servings}
      onChange={e => onChange(Number(e.target.value))}
      className="w-16 border rounded px-2 py-1 text-sm"
    />
  </div>
);

export default ServingSizeInput;
