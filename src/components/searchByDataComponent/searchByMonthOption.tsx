
import React, { useEffect, useState } from "react";
import { months } from "../../utils/month";
const SearchByMonthOption = () => {
  const [options, setOptions] = useState<Array<{ value: string; label: string }>>(
    []
  );
  useEffect(() => {
    const newOptions = [];
    let i = 0;
    while (i < months.length) {
      newOptions.push({
        value: `${months[i]}`,
        label: `${months[i]}`,
      });
      i++;
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

export default SearchByMonthOption;
