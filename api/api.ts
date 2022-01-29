import { $fetch } from "ohmyfetch";

const apiFetch = $fetch.create({ baseURL: "https://api.jikan.moe/v4" });

export default apiFetch;
