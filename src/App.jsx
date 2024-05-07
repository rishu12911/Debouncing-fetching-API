import React, { useRef } from "react";

const DebouncedSearchInput = () => {
  const searchInputRef = useRef(null);

  // Function to debounce
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Function to simulate an API call
  const simulateAPICall = async (searchTerm) => {
    try {
      // Simulate an API call delay (e.g., 1 second)
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`
      );
      const data = await response.json();
      console.log("API Response for search term:", data);
      // You can handle the API response here
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to log search input and make API call
  const logSearchInput = (input) => {
    console.log("Search input:", input);
    // Make the API call with the search term
    simulateAPICall(input);
  };

  // Debounce the logSearchInput function with a delay of 500 milliseconds
  const debouncedLogSearchInput = debounce(logSearchInput, 500);

  // Event handler for input changes
  const handleInputChange = () => {
    const value = searchInputRef.current.value;
    debouncedLogSearchInput(value);
  };

  return (
    <div>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Type something..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DebouncedSearchInput;
