'use server'
import { headers } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_URI;

export const getData = async (path) => {
  try {
    const res = await fetch(`${BASE_URL}${path}`);

    if (!res.ok) throw new Error("Failed to fatch get data");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const postData = async (path, query) => {
  console.log(path, query)
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    if (!res.ok) throw new Error("Failed to fatch get data");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
