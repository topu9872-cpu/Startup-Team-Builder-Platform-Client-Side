"use server";

const BASE_URL = process.env.NEXT_PUBLIC_URI;

export const getData = async (path, userId) => {
  try {
    const res = await fetch(`${BASE_URL}${path}?userId=${userId}`);

    if (!res.ok) throw new Error("Failed to fatch get data");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const postData = async (path, query) => {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    if (!res.ok) throw new Error("Failed to fatch post data");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const UpdateData = async (path, data) => {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to fatch update data");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteData = async (path, id) => {
  try {
    const res = await fetch(`${BASE_URL}${path}?id=${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to fatch delete data");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
