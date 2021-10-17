class Data {

    data;

    constructor(url) {
        this.url = url;
    }
    get lis() {
        this.data = this.getLis();
        return this.data;
    }
    get count() {
        //return the count of all LI's
        return 7;
    }
     getLis() {
        // fetch(this.url)
        //     .then(response => response.json())
        //     .then((lis) => {
        //         // console.log(lis)
        //         //lis = this.data;
        //         this.data = lis;
        //         //console.log(this.data)
        //         return this.data;
        //     });
         let d = fetch(this.url)
             .then((response) => { return response.json() });
         console.log(d);
        
        
    }

}

let data = new Data("http://127.0.0.1:5500/data/datas.json");

console.log(data.data);
data.getLis();



