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



const product = {
    id:"1",
    name:"Hoa tulip",
    price:250000,
    description:"Đây là giống Hoa được yêu thích ở Pháp được nhập khẩu  về Việt Nam ...",
    image:"../assets/img/tulip.webp",
    link:"chi-tiet.html"
};

const products = [
    {id:"1",
    name:"Nước hoa Montblanc",
    price:2500000,
    description:"Hương thơm nam tính và ấm áp, lý tưởng cho những buổi tối lãng mạn.",
    image:"../assets/img/montblanc.jpg",
    link:"chi-tiet.html"
},
    {id:"2",
    name:"Nước hoa Versace",
    price:3500000,
    description:"Nước hoa Versace Bright Crystal EDT",
    image:"../assets/img/versace.webp",
    link:"chi-tiet.html"
},
    {id:"3",
    name:"Nước hoa Dior",
    price:3800000,
    description:"Hương thơm nam tính và ấm áp, lý tưởng cho những buổi tối lãng mạn.",
    image:"../assets/img/dior.jpg",
    link:"chi-tiet.html"
},
    {id:"4",
    name:"Nước hoa 9pm",
    price:100000,
    description:"Nước Hoa Dubai Nam Afnan 9PM EDP 100ml Chính Hãng",
    image:"../assets/img/9pm.jpg",
    link:"chi-tiet.html"
}
];

function addItemV2(product){
    document.getElementById("product-list").innerHTML += `
        <div class="col">
            <div class="card product-item h-100">
                <div class="product-image">
                    <img class="card-img-top" src="${product.image}" alt="${product.name}">
                </div>
                <div class="card-body bg-light product-info">
                    <h4 class="card-title">${product.name}</h4>
                    <h5 class="card-text">${product.price} VNĐ</h5>
                    <p class="card-text">${product.description}</p>
                    <a class="btn btn-info" href="${product.link}">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `;
}

function loadAllProduct(){
    let i=0;
    while(i < products.length)
    {
        addItemV2(products[i]);
        i++;
    }
}