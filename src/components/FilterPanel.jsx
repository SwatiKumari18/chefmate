import React from 'react';

const FilterPanel = ({ dietFilter, onChange }) => {
  const options = [
    { value: 'all',        label: 'All' },
    { value: 'vegan',      label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'non-veg',    label: 'Non-Veg' },
  ];

  return (
    <div className="flex space-x-4 justify-center">
      {options.map(opt => (
        <label key={opt.value} className="flex items-center space-x-1 cursor-pointer">
          <input
            type="radio"
            name="diet"
            value={opt.value}
            checked={dietFilter === opt.value}
            onChange={() => onChange(opt.value)}
            className="accent-green-600"
          />
          <span className="text-sm">{opt.label}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterPanel;
