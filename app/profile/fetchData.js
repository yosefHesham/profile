export async function fetchData() {
  const url = "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/";

  const token = window.localStorage.getItem("token");

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}
