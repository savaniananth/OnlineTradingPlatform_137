import axios from "axios";

const URI='http://localhost:8080'
const URI1 = 'http://localhost:9876'

const addUser = () => axios.post(`${URI}/add`)
const addFeed = () => axios.post(`${URI1}/addfed`)


export {addUser,addFeed}
