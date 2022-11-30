function getList(data) {

    return fetch('http://universities.hipolabs.com/search?country='+data)
    .then(data => data.json())
}

export default getList;