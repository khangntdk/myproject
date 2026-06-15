//Khai báo một đối tượng



function inBCC(n){

    let result = "";
    let i = 1;
    while(i<=10)
    {
        result +=`${n}x${i}=${n*i}<br>`;
        i++;
    }
    document.getElementById("result").innerHTML = result;
}

function addItem(name, price, description, linkproduct, image){
// tạo khung chứa container-item
    const item = document.createElement("div");
    item.setAttribute("class", "container-item");
    // tạo khung chứa container-image và container-infor

    // container-image
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    //  tạo 1 ảnh
    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", image); //truyền tham số image
    imageProduct.setAttribute("alt",name);
    imageProduct.setAttribute("style", "width: 100%; max-width: 150px;");
    // chèn đối tượng ảnh vào khung chứa ảnh
    containerImage.appendChild(imageProduct);

    //tạo khung chứa container-infor
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");

    //tạo 4 child
    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = name;

    const priceProduct = document.createElement("p");
    priceProduct.innerHTML = price;

    const descProduct = document.createElement("p");
    descProduct.innerHTML = description ;

    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "xem chi tiết";
    linkProduct.setAttribute("href", linkproduct);

    //thêm con vào khung chứa info
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descProduct);
    containerInfo.appendChild(linkProduct);

    //thêm khung ảnh vào item
    item.appendChild(containerImage);

    // đưa khung chứa vào item
    item.appendChild(containerInfo)

    //đưa khug chứa container-product-list vào container
    document.getElementById('container-product-list').appendChild(item);


}

const products = [
    {
        id:"1",
        name:"Nước hoa Montblanc",
        price:"2.500.000",
        description:"Hương thơm nam tính và ấm áp, lý tưởng cho những buổi tối lãng mạn.",
        image:"../assets/img/montblanc.jpg",
        link:"chi-tiet.html"
    },

    {
        id:"2",
        name:"Nước hoa Versace",
        price:"3.500.000",
        description:"Versace Bright Crystal EDT với hương thơm quyến rũ và sang trọng.",
        image:"../assets/img/versace.webp",
        link:"chi-tiet.html"
    },

    {
        id:"3",
        name:"Nước hoa Dior",
        price:"3.800.000",
        description:"Mang phong cách quý ông hiện đại với hương thơm mạnh mẽ đầy cuốn hút.",
        image:"../assets/img/dior.jpg",
        link:"chi-tiet.html"
    },

    {
        id:"4",
        name:"Nước hoa Afnan 9PM",
        price:"1.000.000",
        description:"Mùi hương ngọt ngào và nam tính đến từ Dubai.",
        image:"../assets/img/9pm.jpg",
        link:"chi-tiet.html"
    }
];

function addItemV2(product){

    document.getElementById("product-list").innerHTML += `

        <div class="col">

            <div class="card product-item h-100">

                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <div class="product-info">

                    <h4>${product.name}</h4>

                    <div class="price">
                        ${product.price} VNĐ
                    </div>

                    <p class="description">
                        ${product.description}
                    </p>

                    <a href="${product.link}" class="btn-detail">
                        Xem chi tiết
                    </a>

                </div>

            </div>

        </div>

    `;
}

function loadAllProduct(){

    let result = "";

    products.forEach(product => {

        result += `
            <div class="col">

                <div class="card product-item h-100">

                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>

                    <div class="product-info">

                        <h4>${product.name}</h4>

                        <div class="price">
                            ${product.price} VNĐ
                        </div>

                        <p class="description">
                            ${product.description}
                        </p>

                        <a href="${product.link}" class="btn-detail">
                            Xem chi tiết
                        </a>

                    </div>

                </div>

            </div>
        `;
    });

    document.getElementById("product-list").innerHTML = result;
}


function loadAllProduct(){
    let i=0;
    while(i < products.length)
    {
        addItemV2(products[i]);
        i++;
    }
}