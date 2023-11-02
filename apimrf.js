const url = "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"

//fetch
//xmlhttprequest
//async,await
//promise

async function getData(url,cb){
    const res = await fetch(url);
    const data = await res.json();
    cb(data);
}
function displayData(data){
    console.log(data);

// fetch(url).then((result)=> result.json()).then((result)=>console.log(result));

const delDescription =  data.map((curr,ind,arr)=> {
    let obj = {...curr}
    delete obj["description"]
    return obj
})
console.log(delDescription);

const movies2019 = delDescription.filter((elem,ind,arr)=> elem.year===2019);
console.log(movies2019);

const oddMovies = data.filter((ind)=> ind%2 ==0);
console.log(oddMovies);

const div= data.reduce((accu,curr,ind,arr)=>{
    return accu+curr.votes
},0)
}
const data = getData(url,displayData)
console.log(data);