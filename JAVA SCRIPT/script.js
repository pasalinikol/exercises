// Adjust the quantity of each item through  “+” and “-” buttons.

document.addEventListener('DOMContentLoaded', function() {
    var products = this.querySelectorAll(".card-body .item")

// Updating total price function
    function updateTotalPrice() {
        let totalPrice = 0;
        products.forEach(product => {
            const unitPrice = product.querySelector('.unit-price').innerText.replace(' $', '');
            const quantity = product.querySelector('.quantity').innerText;
            totalPrice += Number(unitPrice) * Number(quantity);
        });
        document.querySelector('.total').innerText = `${totalPrice} $`;
    }

    products.forEach(
        (product) => {
            var minus = product.querySelector(".fa-minus-circle")
            var plus = product.querySelector(".fa-plus-circle")
            var heart = product.querySelector(".fa-heart")
            var trash = product.querySelector(".fa-trash-alt")
            var quantitySpan = product.querySelector(".quantity")

            minus.addEventListener("click", function() {
                var quantity = quantitySpan.textContent
                quantitySpan.textContent = Number(quantity)-1
                console.log(quantity)
                updateTotalPrice()
            })

            plus.addEventListener("click", function() {
                var quantity = quantitySpan.textContent
                quantitySpan.textContent = Number(quantity)+1
                console.log(quantity)
                updateTotalPrice()

            })

            // Delete items from the cart.

            trash.addEventListener("click", function () {
                var quantity = quantitySpan.textContent
                quantitySpan.textContent = 0
                console.log(quantity)
                updateTotalPrice()
            })

            // Like items through a clickable heart-shaped button that will change color accordingly.

            heart.addEventListener("click", function () {
            heart.style.color === "red" ? heart.style.color = "black": heart.style.color = "red"
            }) 

            // See the total price adjusted according to quantity and deletions.
            updateTotalPrice()


            }



        
        )
    }



        )




