class App {
  constructor() {
    this.animations = new Animations();
    this.renderServices();
    this.initEventListeners();
  }

  renderServices() {
    const servicesGrid = document.getElementById("servicesGrid");

    services.forEach((service) => {
      const col = document.createElement("div");
      col.className = "col-lg-4 col-md-6";
      col.innerHTML = `
                <div class="card h-100 service-card">
                    <div class="card-body text-center">
                        <img src="${service.icon}" alt="${
        service.name
      }" class="service-icon">
                        <h3 class="h4 mb-3">${service.name}</h3>
                        <p class="mb-3">${service.description}</p>
                        <div class="h5 mb-3">$${service.price.toFixed(2)}</div>
                        <button class="btn btn-primary add-to-cart" data-id="${
                          service.id
                        }">Add to Cart</button>
                    </div>
                </div>
            `;
      servicesGrid.appendChild(col);
    });
  }

  initEventListeners() {
    const getStartedBtn = document.getElementById("getStartedBtn");
    getStartedBtn.addEventListener("click", () => {
      document
        .getElementById("services")
        .scrollIntoView({ behavior: "smooth" });
    });
  }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
