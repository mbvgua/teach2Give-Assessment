var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log('hello world');
// get all the variables
var cartBtn = document.querySelector('.cart-btn');
var closeCartBtn = document.querySelector('.close-cart');
var clearCartBtn = document.querySelector('.clear-cart');
var cartDom = document.querySelector('.cart');
var cartOverlay = document.querySelector('.cart-overlay');
var cartItems = document.querySelector('.cart-items');
var cartDiv = document.querySelector('.cart-item');
var cartContent = document.querySelector('.cart-content');
var cartTotal = document.querySelector('.cart-total');
var productsDom = document.querySelector('.products-center');
// define empty arrays of both products and cart items
var cart = [];
var productsUrl = 'http://localhost:3000/products';
var getProducts = /** @class */ (function () {
    function getProducts() {
        this.init();
    }
    getProducts.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchProducts()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // get products from db
    getProducts.prototype.fetchProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, products, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(productsUrl)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        products = _a.sent();
                        console.log(products); //not working why?
                        return [2 /*return*/, products];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, []];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    getProducts.prototype.displayProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var products, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchProducts()];
                    case 1:
                        products = _a.sent();
                        html = '';
                        products.forEach(function (product) {
                            html += "<article class=\"product\">\n                <div class=\"img-container\">\n                    <img src=\"".concat(product.image, "\" alt=\"").concat(product.title, "\" class=\"product-img\">\n                    <button class=\"bag-btn\" data-id=\"").concat(product.id, "\">\n                        <i class='bx bx-cart-add'></i>\n                        add to cart\n                    </button>\n                </div>\n                <h3> ").concat(product.title, " </h3>\n                <h4> $ ").concat(product.price, " </h4>\n              </article> ");
                        });
                        productsDom.innerHTML = html;
                        return [2 /*return*/];
                }
            });
        });
    };
    return getProducts;
}());
// // allow for local storage of data
// class Storage(){
//   //store data in local storage 
//   static storeData(products){
//     localStorage.setItem('products', JSON.stringify(products))
//   }
//     // function to get unique product id
//     static getProduct(id){
//       let products = JSON.parse(localStorage.getItem('products'))
//       return products.find(product => product.id === id)
//   }
// }
// add the eventListener to start entire project
document.addEventListener('DOMContentLoaded', function () {
    // define instances of the classes
    var productsInstance = new getProducts();
    // get products using now available methods
    productsInstance.fetchProducts()
        .then(function () {
        productsInstance.displayProducts();
    });
});
