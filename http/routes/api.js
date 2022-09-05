
const router = require("express").Router();
const { expressWrapper } = require("../helper");
const {
    addProduct,
    removeProduct,
    editProduct,
    searchProduct,
    getProductByType,
} = require("../../modules/api");


router.post("/add/product", expressWrapper(addProduct));

router.delete("/remove/product/:id", expressWrapper(removeProduct));

router.put("/edit/product/:id", expressWrapper(editProduct));


router.get("/search/product", expressWrapper(searchProduct));

router.get("/product/:type", expressWrapper(getProductByType));





module.exports = router;
