import React from 'react';
import { InputSearch } from '../../uielements/input';
 function SearchBox (props) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {}
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <InputSearch
      id="InputTopbarSearch"
      size="large"
      placeholder="Enter search text"
      onBlur={props.onBlur}
    />
  );
}
export default SearchBox;