const search = document.getElementById('search');
const MatchCont = document.getElementById('MatchCont');

//search LIs.json and filter
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
        MatchCont.innerHTML = 'Type in to Search';  
    }
    outputHtml(matches);

    console.log(matches); 
};
//show results in HTML

const outputHtml = matches => {
    if (matches.length > 0) {
    const html = matches.map(match =>`
     <div class="li-list w-50 mx-auto mt-4">
        <ol class="breadcrumb ">
            <li class="breadcrumb-item flex text-center"><span class="text-info">
                    ${match.name}
                </span>
            </li>
        </ol>
     </div>
    `).join('');
    MatchCont.innerHTML = html;
    }
};


search.addEventListener('input', () => searchLIs(search.value));