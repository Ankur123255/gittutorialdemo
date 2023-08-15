const API_BASE_URL = "https://crudcrud.com/api/1dee835aa210447690f7adee0e3643d8";
    const productsEndpoint = `${API_BASE_URL}/products`;

    let products = []; 
    let totalValue = 0;

    async function getProductsFromAPI() {
      try {
        const response = await axios.get(productsEndpoint);
        return response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        return [];
      }
    }

    async function saveProductToAPI(product) {
      try {
        const response = await axios.post(productsEndpoint, product);
        return response.data;
      } catch (error) {
        console.error("Error saving product:", error);
        return null;
      }
    }

    async function deleteProductFromAPI(id) {
      try {
        const response = await axios.delete(`${productsEndpoint}/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error deleting product:", error);
        return null;
      }
    }

    async function updateProductOnAPI(id, product) {
      try {
        const response = await axios.put(`${productsEndpoint}/${id}`, product);
        return response.data;
      } catch (error) {
        console.error("Error updating product:", error);
        return null;
      }
    }

    async function submitProduct() {
      const productNameInput = document.getElementById('product-name');
      const productPriceInput = document.getElementById('product-price');

      const productName = productNameInput.value.trim();
      const productPrice = parseFloat(productPriceInput.value);

      if (productName !== '' && !isNaN(productPrice) && productPrice >= 0) {
        const productDetails = { name: productName, price: productPrice };

        try {
          const savedProduct = await saveProductToAPI(productDetails);
          if (savedProduct) {
            updateProductList();
            productNameInput.value = '';
            productPriceInput.value = '';
          }
        } catch (error) {
          console.error("Error submitting product:", error);
        }
      }
    }

    async function updateProductList() {
      const productListElement = document.getElementById('productList');
      productListElement.innerHTML = '';

      try {
        products = await getProductsFromAPI();
        totalValue = 0;

        products.forEach((product, index) => {
          totalValue += product.price;

          const listItem = document.createElement('li');
          listItem.innerHTML = `Name: ${product.name}, Price: $${product.price.toFixed(2)} 
            
            <button onclick="removeProduct('${product._id}')">Delete</button>`;
          productListElement.appendChild(listItem);
          productListElement.appendChild(document.createElement('br'));
        });

        document.getElementById('totalValue').textContent = `$${totalValue.toFixed(2)}`;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    async function removeProduct(id) {
      try {
        await deleteProductFromAPI(id);
        updateProductList();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }

    
    
    updateProductList();