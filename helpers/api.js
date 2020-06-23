const connectAPI = async (extension, type, data = "", token = false) => {
  const url = "https://myskin-server.herokuapp.com/" + extension;

  const dataobj = {
    method: type,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) dataobj.headers["Authorization"] = `Bearer ${token}`;

  if (data) dataobj.body = JSON.stringify(data);

  const response = await fetch(url, dataobj);

  return response.statusText === "No Content" ? {} : response.json();
};

export default connectAPI;
