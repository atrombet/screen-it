import React from 'react';
import { SelectOption } from '../../interfaces';
import './ScreenItSelect.css';

interface ScreenItSelectProps {
  options: SelectOption[],
  selectedOption: string;
  onSelect: (value: string) => void
}

export const ScreenItSelect: React.FC<ScreenItSelectProps> = ({ options, selectedOption, onSelect }) => {
  // Define a function that sets the class name of the select to the class name of the currently selected option.
  const setSelectClass = (select: any) => {
    if (select) {
      select.className = select.selectedOptions[0].className;
    }
  }

  // Handle a ref callback when the select is created.
  const selectRefCreated = (node: any) => {
    setSelectClass(node);
  }

  // Handle a change event from the select.
  const selectChange = (event: any) => {
    const select = event.currentTarget;
    setSelectClass(select);
    onSelect(select.selectedOptions[0].value);
  }

  return (
    <div className="screenItSelect">
      <select value={selectedOption} ref={selectRefCreated} onChange={selectChange}>
        <option className="placeholder" value="" disabled>Select a category</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.displayText}</option>
        ))}
      </select>
    </div>
  );
};
