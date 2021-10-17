class Data {
    data = [];
    constructor(url) {
        this.url = url;

    }
    get lis() {
        return this.getLis();
    }
    getLis() {
        fetch(this.url)
            .then(response => response.json())
            .then((lis) => {
               console.log(lis)
                 lis = this.data;
            });
        return this.data;
    }
}

let data = new Data("http://127.0.0.1:5500/data/datas.json");

console.log(data.lis())



