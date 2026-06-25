// DANH SÁCH SẢN PHẨM

const products = [

    {
        id: 0,
        name: "Hoa Tulip",
        price: "350.000đ",
        description: "Hoa tulip nhập khẩu cao cấp nhiều màu sắc.",
        image: "../assets/img/tulip.jpg",
        link: "#"
    },

    {
        id: 1,
        name: "Hoa Lavender",
        price: "320.000đ",
        description: "Mang hương thơm nhẹ nhàng và sang trọng.",
        image: "../assets/img/lavender.jpg",
        link: "#"
    },

    {
        id: 2,
        name: "Hoa Hồng",
        price: "450.000đ",
        description: "Biểu tượng của tình yêu và sự lãng mạn.",
        image: "../assets/img/hoahong.jpg",
        link: "#"
    },

    {
        id: 3,
        name: "Hoa Baby",
        price: "1.280.000đ",
        description: "Thiết kế tinh tế phù hợp làm quà tặng.",
        image: "../assets/img/baby.jpg",
        link: "#"
    }

];

// HIỂN THỊ SẢN PHẨM

function addItem(product){

    // CARD
    const item = document.createElement("div");
    item.classList.add("container-item");

    // IMAGE
    const containerImage = document.createElement("div");
    containerImage.classList.add("container-image");

    const image = document.createElement("img");

    image.src = product.image;
    image.alt = product.name;

    containerImage.appendChild(image);

    // INFO
    const containerInfo = document.createElement("div");
    containerInfo.classList.add("container-info");

    // NAME
    const name = document.createElement("h3");
    name.classList.add("product-name");
    name.innerHTML = product.name;

    // PRICE
    const price = document.createElement("p");
    price.classList.add("product-price");
    price.innerHTML = product.price;

    // DESC
    const desc = document.createElement("p");
    desc.classList.add("product-desc");
    desc.innerHTML = product.description;

    // BUTTON
    const button = document.createElement("a");

    button.classList.add("btn-detail");

    button.href = `detail.html?id=${product.id}`;

    button.innerHTML = "Xem chi tiết";

    // APPEND
    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(desc);
    containerInfo.appendChild(button);

    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    document
        .getElementById("container-product-list")
        .appendChild(item);
}

// LOAD DATA

products.forEach(product => {
    addItem(product);
});

