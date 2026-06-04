
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