import {axiosService} from "./axiosService";
import {urls} from "../configs";

const moviesService = {
    getAll:(page)=>axiosService.get(`${urls.movies}?page=${page}`)
}

export {moviesService}