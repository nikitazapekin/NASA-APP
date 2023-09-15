
import React, { useEffect, useState } from "react";
const SearchByDayOption = () => {
  const [options, setOptions] = useState<Array<{ value: string; label: string }>>(
    []
  );
  useEffect(() => {
    const newOptions = [];
    let currentDay = 1;
    while (currentDay < 32) {
      newOptions.push({
        value: `${currentDay}`,
        label: `${currentDay}`,
      });
      currentDay++;
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

export default SearchByDayOption;