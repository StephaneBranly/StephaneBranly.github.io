const readFile = async (file: string) => {
  const response = await fetch(file);
  const text = await response.text();
  return text;
};

export default readFile;
