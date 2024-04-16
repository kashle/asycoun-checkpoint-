async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
  }
  
  // Example usage:
  const values = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(values);

  
  async function awaitCall() {
    try {
      const data = await fetchDataFromAPI();
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch data from API:", error.message);
    }
  }
  
  async function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulating API call with a delay
      setTimeout(() => {
        const success = Math.random() < 0.5; // Randomly decide if call succeeds or fails
        if (success) {
          resolve("Data from API");
        } else {
          reject(new Error("API call failed"));
        }
      }, 1000); // Simulating 1 second delay
    });
  }
  
  // Example usage:
  awaitCall();

  
  async function awaitCall() {
    try {
      const data = await fetchDataFromAPI();
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch data from API:", error.message);
    }
  }
  
  async function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() < 0.5; // Randomly decide if call succeeds or fails
        if (success) {
          resolve("Data from API");
        } else {
          reject(new Error("API call failed"));
        }
      }, 1000);
    });
  }
  
  // Example usage:
  awaitCall();

  

  async function concurrentRequests() {
    try {
      const [result1, result2] = await Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2()]);
      console.log("Combined results:", result1, result2);
    } catch (error) {
      console.error("Failed to fetch data from API:", error.message);
    }
  }
  
