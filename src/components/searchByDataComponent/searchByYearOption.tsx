
import React, { useEffect, useState } from "react";
const SearchByDataOption = () => {
  const [options, setOptions] = useState<Array<{ value: string; label: string }>>(
    []
  );
  useEffect(() => {
    const newOptions = [];
    let currentYear = 1976;
    while (currentYear < 2023) {
      newOptions.push({
        value: `${currentYear}`,
        label: `${currentYear}`,
      });
      currentYear++;
    }
    setOptions(newOptions);
  }, []);
  return (
    <select>
      {options.map((option, index) => (
        <option key={index} value={option.value} label={option.label} />
      ))}
    </select>
  );
};

export default SearchByDataOption;
