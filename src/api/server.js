"use server";

import { authHeaders } from "@/lib/user";

const BASE_URL = process.env.NEXT_PUBLIC_URI;


export const getData = async (path, userId) => {
  const token = (await authHeaders()) || null;

  try {
    const res = await fetch(`${BASE_URL}${path}?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fatch get data");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const postData = async (path, query) => {
  const token = (await authHeaders()) || null;

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
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
     console.log(path)
  const token = (await authHeaders()) || null;

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
   
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
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

export const deleteData = async (path) => {
  const token = (await authHeaders()) || null;

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fatch delete data");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAllData = async (path) => {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {});

    if (!res.ok) throw new Error("Failed to fatch get data");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
