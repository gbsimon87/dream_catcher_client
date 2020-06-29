export const postDream = async (url, data) => {
  try {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });
    const dream = await result.json();
    return dream;
  } catch (error) {
    console.log(error);
  }
};

export const fetchData = async (url) => {
  try {
    const result = await fetch(url);
    const dreams = await result.json();
    return dreams;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDream = async (url) => {
  try {
    const result = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedDream = await result.json();
    return deletedDream;
  } catch (error) {
    console.log(error);
  }
};
