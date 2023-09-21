export const searchFunction = (search, data, setData) => {
  if (search) {
    const updated = data.filter((e) =>
      e.question.toLowerCase().trim().includes(search.toLowerCase())
    );
    setData(updated);
  } else {
    setData(data);
  }
};
