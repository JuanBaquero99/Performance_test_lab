import http from "k6/http"
import { Counter, Gauge, Rate} from "k6/metrics"

export const options = {
    vus: 10,
    duration: "20s"
}

const myRate = new Rate("called_products")



export default function () {
    const request = http.get("https://api.escuelajs.co/api/v1/users")
    myRate.add(1);
    myRate.add(3);

    const request404 = http.get("https://api.escuelajs.co/api/v1/users")
    if(request404.status === 404){
        myRate.add(0);
    }
}