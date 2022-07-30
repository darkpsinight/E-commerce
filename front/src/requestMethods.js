import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzZmYWM2NWE0MzA2YWM4OGFlMjIzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODAwMTI5MiwiZXhwIjoxNjY1Nzc3MjkyfQ.8sGhSDVNQJfIYEDdx5R6HHbc_m7USEvsFqa9D36KNpc";

/* const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken; */

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});