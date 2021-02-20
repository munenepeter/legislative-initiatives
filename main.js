 getData();
 async function getData() {
     const allData = await fetch('https://sheet.best/api/sheets/9bdd08a8-3232-4fe9-b3c9-690b47302636');
     const datas = await allData.json();

     let i = 0;
     datas.forEach(data => {
         i++;
         if (i > 0) {
             const tbody = document.getElementById('tbody');
             const date = data.Date;
             const geoffrey = data.Geoffrey;
             const peter = data.Peter;
             const maxwell = data.Maxwell;
             const mar = data.Mar;
             const total = data.Total;
             const d = new Date(date);
             const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
             const day = days[d.getDay()];
             const row = ` 
      <tr class="sm:table-row" >
      <td rowspan="4" class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-red-900" id="date">${date}
          </div>
          <div class="text-sm text-red-500" id="day">
            ${day} 
          </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full"
                      src="images/geoffrey.jpg" alt="">
              </div>
              <div class="ml-4">
                  <div class="text-sm font-medium text-red-900">
                  Geoffrey mugo
                  </div>
                  <div class="text-sm text-red-500">
                  geoffrey.mugo@digitaldividedata.com
                  </div>
              </div>
          </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
          <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-purple-800">
              ${geoffrey}
          </span>
      </td> 
  </tr>
  <tr class="sm:table-row">
      <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full"
                      src="images/max.jpg" alt="">
              </div>
              <div class="ml-4">
                  <div class="text-sm font-medium text-red-900">
                  Maxwell Kanoru
                  </div>
                  <div class="text-sm text-red-500">
                  maxwell.kanoru@digitaldividedata.com
                  </div>
              </div>
          </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
          <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-purple-800">
              ${maxwell}
          </span>
      </td>
      <td rowspan="4" class="px-6 py-4 whitespace-nowrap text-sm text-red-500">
      ${total}
     </td>

  </tr>
  <tr class="sm:table-row">
      <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
              <img class="h-10 w-10 rounded-full"
              src="images/peter.png" alt="">
              </div>
              <div class="ml-4">
                  <div class="text-sm font-medium text-red-900">
                  Peter Munene
                  </div>
                  <div class="text-sm text-red-500">
                  peter.njega@digitaldividedata.com
                  </div>
              </div>
          </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
          <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-purple-800">
              ${peter}
          </span>
      </td>
  </tr>
  <tr class="sm:table-row">
      <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full"
                      src="images/mar.jpg" alt="">
              </div>
              <div class="ml-4">
                  <div class="text-sm font-medium text-red-900">
                  Mar
                  </div>
                  <div class="text-sm text-red-500">
                      not available
                  </div>
              </div>
          </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
          <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-purple-800">
              ${mar}
          </span>
      </td>
  </tr>
  `
             tbody.innerHTML += row;
         }
     });
 }