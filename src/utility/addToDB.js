const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert("Items already added!");
  } else {
    storedBookData.push(id);

    const setDataToLS = JSON.stringify(storedBookData);
    localStorage.setItem("readList", setDataToLS);

    console.log(storedBookData);
  }
};

export { addToDB };
