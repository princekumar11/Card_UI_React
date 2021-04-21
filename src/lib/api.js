import axios from "axios";

export async function getUserData(user) {
  const response = await axios.get("https://reqres.in/api/users?page=1").then(res => res).catch(e=>{return e});
  return response;
}