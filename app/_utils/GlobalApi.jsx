const { default: axios } = require("axios");

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api'
})

const getCategory=()=>axiosClient.get('/categories?populate=*')
const getSlider=()=>axiosClient.get('/sliders?populate=*')

const getCategoryList=()=>axiosClient.get('/categories?populate=*').then(ress=>{
    return ress.data.data;
})

const getALlProduct=()=>axiosClient.get('/products?populate=*').then(ress=>{
    return ress.data.data;
})

export default{
    getCategory,
    getSlider,
    getCategoryList,
    getALlProduct
}