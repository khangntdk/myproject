const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products.find(
    item => item.id === id
);

if (product) {

    document.getElementById("product-detail").innerHTML = `
        <div class="row">

            <div class="col-md-5">

                <img
                    src="${product.image}"
                    class="img-fluid rounded shadow"
                    alt="${product.name}"
                >

            </div>

            <div class="col-md-7">

                <h1 class="mb-3">
                    ${product.name}
                </h1>

                <h3 class="text-danger mb-3">
                    ${product.price} VNĐ
                </h3>

                <p class="mb-4">
                    ${product.description}
                </p>

                <button class="btn btn-dark me-3">
                    Thêm giỏ hàng
                </button>

                <button class="btn btn-danger">
                    Mua ngay
                </button>

            </div>

        </div>
    `;
}

/* Sản phẩm liên quan */

let relatedHtml = "";

products
    .filter(item => item.id !== id)
    .forEach(item => {

        relatedHtml += `
            <div class="col">

                <div class="card h-100">

                    <img
                        src="${item.image}"
                        class="card-img-top"
                        style="height:250px;object-fit:cover;"
                    >

                    <div class="card-body text-center">

                        <h5>
                            ${item.name}
                        </h5>

                        <p class="text-danger">
                            ${item.price} VNĐ
                        </p>

                        <a
                            href="detail9.html?id=${item.id}"
                            class="btn btn-outline-dark"
                        >
                            Xem chi tiết
                        </a>

                    </div>

                </div>

            </div>
        `;
    });

document.getElementById("related-products").innerHTML =
    relatedHtml;