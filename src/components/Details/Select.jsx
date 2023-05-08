import { useEffect, useState } from "react"

const Select = (props) => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (e) => {
      const value = e.target.value;
      setSelectedOption(value);
      props.onOptionChange(value);
    };
  
    return (
      <select value={selectedOption} onChange={handleSelectChange}>
        {props.options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

export default Select