const saveInterestsToLocalStorage = (interests) => {
    localStorage.setItem('selectedInterests', JSON.stringify(interests));
  };
  
  const loadInterestsFromLocalStorage = () => {
    const storedInterests = localStorage.getItem('selectedInterests');
    return storedInterests ? JSON.parse(storedInterests) : [];
  };
  
  const interestsService = {
    saveInterestsToLocalStorage,
    loadInterestsFromLocalStorage,
  };
  
  export default interestsService;
  