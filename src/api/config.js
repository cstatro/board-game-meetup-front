export const postConfig = obj => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify(obj)
});

export const deleteConfig = () => ({
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
