import axios from "axios";

export function getUser() {
	return axios.get(`https://webttcn.herokuapp.com/v1/users`);
}