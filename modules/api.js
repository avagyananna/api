
const Product = require("../data-layer/mongo/queries/product");
const Card = require("../data-layer/mongo/queries/card")
const uuid = require("uuid")
const { BadInputException, BadRequestException } = require("../error");



//to add a product
async function addProduct(req, res){
    const product = req.body;
    if(!product.name || !product.price || !product.description || !product.type){
        throw new BadInputException("invalid body")
    }
    const id = uuid.v4();
    product.id = id;
    await Product.create(product);
    return {
        success : true
    }
}

//to remove a product
async function removeProduct(req,res){
    const id = req.params.id;
    await Product.findOneAndDelete({id});
    return {
        success : true
    }
}

// to edit a product
async function editProduct(req, res){
    const id = req.params.id;
    const product = req.body;
    await Product.update(id, product)
        
}

//to search products 
async function searchProduct(req,res){
    const q = req.query.q;
    if(!q){
        throw new BadRequestException("invalid q");
    }
    const limit = req.query.limit ? parseInt(req.query.limit ) : 10;
    const skip = req.query.skip ? parseInt(req.query.skip ) : 0;
    const products = await Product.find({ $text: { $search: q}}, null,limit,skip);
    return products;
}
 
//to search a product type
async function getProductByType(req,res){
    const type = req.params.type;
    const limit = req.query.limit ? parseInt(req.query.limit ) : 10;
    const skip = req.query.skip ? parseInt(req.query.skip ) : 0;
    const products = await Product.find({type},null, skip,limit);
    return products;
}

//to add item  into shopping card and .
async function addToCard(req, res){
    const product = req.body;
    const count = req.body.count ? parseInt(req.body.count) : 1;
    if(!product.name || !product.image || !product.type || !product.price || !product.id){
        throw new BadInputException("invalid body");
    }
    const userId = req.user.userId;
    const card = await Card.findOne({userId});
    if(!card){
        const id = uuid.v4();
        product.count = count;
        const products = [];
        products[0]=product;
        const newCard = {
            userId,
            id,
            products,
            totalPrice: product.price
        }

        await Card.create(newCard);
        newCard.totalPrice = product.price;
        return newCard;
    }
    if(!product.id){
        throw new BadInputException("invalid product id");
    }
    const oldProduct = card.products.filter(item=> item.id == product.id);
    if(oldProduct.length){
        const newProduct = card.products.map(item=> item.id === product.id ? oldProduct[0] : item);
        const newCard = {};
        newCard.products = newProduct
        newCard.totalPrice = card.totalPrice + product.price;
        newCard.userId = userId;
        newCard.id = card.id;
        await Card.update(card.id, newCard);
        return newCard;
    }

    card.products.push(product);
    card.totalPrice = card.totalPrice + product.price;
    await Card.update(card.id, card);
    return card

}

//to remove item from shopping card
async function removeCardItem(req,res){
    const id = req.params.id;
    const userId = req.user.userId;
    const newCard = await Card.findOneAndDelete({userId,"products.id": id});
    return newCard;
}


async function getCart(req, res){
    const userId = req.user.userId;
    const card = await Card.findOne({userId});
    return card;
}


module.exports = {
    addProduct,
    removeProduct,
    editProduct,
    searchProduct,
    getProductByType,
    addToCard,
    removeCardItem,
    getCart
}