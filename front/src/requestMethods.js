import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzZmYWM2NWE0MzA2YWM4OGFlMjIzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzczOTA5NCwiZXhwIjoxNjY1NTE1MDk0fQ.DtQVQXrEeUMPFa6xvZQuHwh1FpOCbtYCI_UEQTwhtRc";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});