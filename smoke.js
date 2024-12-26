import { sleep } from "k6"
import http from "k6/http"

export const options = {
    vus: 1, //User virtual
    duration: '1m' //Duration
};

export default function () {
    let response = http.get("https://api.escuelajs.co/api/v1/products")
}