import http from "k6/http"
import { Trend } from "k6/metrics"

export const options = {
    vus: 10,
    duration: "20s"
}

const myTrend = new Trend("duration_time")
const mySecondTrend = new Trend("categories_time")




export default function () {
    const request = http.get("https://api.escuelajs.co/api/v1/users")

    myTrend.add(request.timings.duration);

    const categories = http.get("https://api.escuelajs.co/api/v1/categories")

    mySecondTrend.add(categories.timings.duration);

}