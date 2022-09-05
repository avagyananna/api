
const router = require("express").Router();
const { expressWrapper } = require("../helper");
const {
    addToCard,
    removeCardItem,
    getCart
} = require("../../modules/api");


router.post("/add", expressWrapper(addToCard));

router.delete("/remove/:id", expressWrapper(removeCardItem));

router.get("/", expressWrapper(getCart));




module.exports = router;
