class Cart {
  constructor() {
    this.items = [];
    this.modal = new bootstrap.Modal(document.getElementById("cartModal"));
    this.bindEvents();
  }

  bindEvents() {
    document
      .getElementById("cartBtn")
      .addEventListener("click", () => this.toggleCart());
    document
      .getElementById("checkoutBtn")
      .addEventListener("click", () => this.checkout());
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("add-to-cart")) {
        const serviceId = e.target.dataset.id;
        this.addItem(serviceId);
      }
    });
  }

  addItem(serviceId) {
    const service = services.find((s) => s.id === serviceId);
    if (service) {
      this.items.push(service);
      this.updateCartCount();
      this.showAddedNotification();
    }
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.updateCartCount();
    this.updateCartDisplay();
  }

  updateCartCount() {
    const cartCount = document.querySelector(".cart-count");
    cartCount.textContent = this.items.length;
  }

  updateCartDisplay() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotalAmount");

    cartItems.innerHTML = "";
    const total = this.items.reduce((sum, item) => sum + item.price, 0);

    this.items.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.className = "cart-item";
      itemElement.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
                <button onclick="cart.removeItem(${index})">×</button>
            `;
      cartItems.appendChild(itemElement);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
  }

  toggleCart() {
    this.updateCartDisplay();
    this.modal.show();
  }

  showAddedNotification() {
    const notification = document.createElement("div");
    notification.className = "added-to-cart";
    notification.textContent = "Added to cart!";
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 2000);
  }

  checkout() {
    if (this.items.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Implement checkout logic here
    alert("Proceeding to checkout...");
    this.modal.hide();
  }
}

const cart = new Cart();
