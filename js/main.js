const elProducts = document.querySelectorAll(".js-products");
const cards = document.getElementById("cards");
const loading = document.getElementById("loading");
elProducts.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (e.target.innerText === "Mahsulotlar") {
            fetch("https://json-api.uz/api/project/fn37/products").then((res) => {
                const req = res.json();
                return req;
            }).then((req) => {
                cards.innerHTML = "";
                loading.classList.add("hidden");
                req.data.forEach((item) => {
                    const { brand, category, name, price, description } = item;
                    cards.innerHTML +=
                        `
                    <div class="card w-80 min-h-[250px] bg-base-100 shadow-md shadow-gray-700">
                      <div class="card-body">
                         <span class="badge badge-xs badge-warning">${category}</span>
                         <div class="flex justify-between">
                         <h2 class="text-3xl font-bold">${name}</h2>
                         <span class="text-xl">${brand}</span>
                      </div>
                         <p>${description}</p>
                         <div class="mt-6">
                           <button class="btn btn-primary btn-block">${price} $</button>
                         </div>
                      </div>
                    </div>
                    `
                })
            })
        }
        if (e.target.innerText === "O'quvchilar") {
            fetch("https://json-api.uz/api/project/fn37/students").then((res) => {
                const req = res.json();
                return req
            }).then((req) => {
                cards.innerHTML = "";
                req.data.forEach((item) => {
                    const { age, description, grade, name, school } = item;
                    cards.innerHTML +=
                        `
                    <div class="card bg-base-100 shadow-md shadow-gray-700 text-primary-content w-80 h-72">
                       <div class="card-body">
                         <h2 class="card-title">${name}</h2>
                         <p>${description}</p>
                         <span class=" border border-gray-900 text-white px-3 py-2 rounded-[8px]">${grade}</span>
                         <span class=" border border-gray-900 text-white px-3 py-2 rounded-[8px]">${age} yosh</span>
                        <span class="btn btn-primary btn-block">${school}</span>
                       </div>
                    </div>
                    
                    `
                })
            })
        }
        if (e.target.innerText === "Hayvonlar") {
            fetch("https://json-api.uz/api/project/fn37/animals").then((res) => {
                const req = res.json();
                return req
            }).then(req => {
                cards.innerHTML = "";
                req.data.forEach(item => {
                    const { category, description, habitat, name } = item;
                    cards.innerHTML +=
                        `
                    <div class="card card-side bg-base-100 min-h-[230px] shadow-md shadow-gray-700">
                      <div class="card-body">
                        <h2 class="card-title">${name}</h2>
                        <p>${description}</p>
                        <span class="badge badge-xs badge-warning px-3 py-3">${habitat}</span>
                        <div class="card-actions justify-end">
                          <button class="px-3 py-2 bg-transparent border border-gray-600 rounded-[8px] cursor-pointer">${category}</button>
                        </div>
                      </div>
                    </div>
                    
                    `
                })
            })
        }
        if (e.target.innerText === "Mashinalar") {
            fetch("https://json-api.uz/api/project/fn37/cars").then(res => {
                const req = res.json();
                return req
            }).then(req => {
                cards.innerHTML = "";
                req.data.forEach(item => {
                    const { brand, category, description, price } = item;
                    cards.innerHTML +=
                        `
                    <div class="card bg-base-100 w-80 shadow-md shadow-gray-700">
                       <div class="card-body">
                         <h2 class="card-title font-bold">
                         ${brand}
                           <div class="badge badge-xs badge-warning px-3 py-3">${category}</div>
                         </h2>
                         <p>${description}</p>
                           <button class="btn btn-primary btn-block mt-4">${price} $</button>
                       </div>
                    </div>

                    `
                })
            })
        }
    })
});