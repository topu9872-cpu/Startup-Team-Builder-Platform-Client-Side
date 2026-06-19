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
