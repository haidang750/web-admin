import axios from "axios";

export function getUsers() {
	return axios.get(`/users`);
}

export function getUser(userId) {
	return axios.get(`/users/${userId}`);
}