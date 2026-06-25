const products = [
    {
        id: 0,
        name: "Hoa Tulip",
        price: "350.000đ",
        description: "Hoa tulip nhập khẩu cao cấp nhiều màu sắc.",
        image: "../assets/img/tulip.jpg"
    },

    {
        id: 1,
        name: "Hoa Lavender",
        price: "320.000đ",
        description: "Mang hương thơm nhẹ nhàng và sang trọng.",
        image: "../assets/img/lavender.jpg"
    },

    {
        id: 2,
        name: "Hoa Hồng",
        price: "450.000đ",
        description: "Biểu tượng của tình yêu và sự lãng mạn.",
        image: "../assets/img/hoahong.jpg"
    },

    {
        id: 3,
        name: "Hoa Baby",
        price: "1.280.000đ",
        description: "Thiết kế tinh tế phù hợp làm quà tặng.",
        image: "../assets/img/baby.jpg"
    }
];

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(item => item.id === id);

const detail = document.getElementById("product-detail");

detail.innerHTML = `
<div class="detail-container">

    <div class="detail-image">
        <img src="${product.image}" alt="${product.name}">
    </div>

    <div class="detail-info">

        <h2>${product.name}</h2>

        <p class="price">${product.price}</p>

        <p class="desc">${product.description}</p>

        <div class="actions">

            <button class="cart-btn">
                Thêm vào giỏ hàng
            </button>

            <button class="buy-btn">
                Mua ngay
            </button>

        </div>

    </div>

</div>
`;
const relatedList =
    document.getElementById("related-list");

const relatedProducts =
    products.filter(item => item.id !== id);

relatedProducts.forEach(item => {

    relatedList.innerHTML += `
    
    <div class="related-card">

        <img src="${item.image}" alt="${item.name}">

        <h3>${item.name}</h3>

        <p>${item.price}</p>

        <a href="product-detail.html?id=${item.id}">
            Xem chi tiết
        </a>

    </div>
    
    `;
});