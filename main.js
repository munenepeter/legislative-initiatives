class Data {

    constructor(url) {
        this.url = url;

    }
    get lis() {
        return this.getLis();
    }
    getLis() {
        fetch(this.url)
            .then(response => response.json())
            .then((data) => {
                return data;
            });
    }
}

let data = new Data("http://127.0.0.1:5500/data/datas.json");

console.log(data.lis)



