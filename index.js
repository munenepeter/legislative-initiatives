//Get the the Elements
const search = document.getElementById('search');
const MatchCont = document.getElementById('MatchCont');
//const row = document.getElementById('row');

//search datas.json and filter
const searchLIs = async searchText => {
    const res = await fetch('data/datas.json');
    const datas = await res.json();

    //Get Matches to current text input
    let matches = datas.filter( data => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return data.name.match(regex) || data.abbr.match(regex) 
    });
    if (searchText.length === 0) {
        matches = [];
        MatchCont.innerHTML = `<a href="#" class="list-group-item list-group-item-action">Type to Search</a>`;
    }
    outputHtml(matches);

    console.log(matches); 
};
//show results in HTML
const outputHtml = matches => {
    if (matches.length > 0) {
     const html = matches.map(match =>`
       <a href="#" class="list-group-item list-group-item-action">${match.name}</a>     
    `).join('');      
    MatchCont.innerHTML = html;
    }
}; 
search.addEventListener('input', () => searchLIs(search.value));
