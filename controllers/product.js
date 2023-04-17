const {ProductInfo} = require("../model/product");

const insertProductInDB = async(req, res) => {
    const data = req.body;

    try {

        const productInfo = new ProductInfo({
            id: data.id,
            catagory: data.category,
            name: data.name,
            ratting: data.ratting,
            image: data.image,
            price: data.price,
            oPrice: data.oPrice,
        })
    
        const dbResponse = await ProductInfo.save(productInfo);
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send({message: "Product are saved", data: dbResponse})
    } catch(err) {
        console.log("Error while oprating on db =>", error);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

const findFeatureProduct = async (req, res) => {
    const query = {featureProduct: { $eq : "true" }};
    try {
        const dbResponse = await ProductInfo.find(query);
        console.log("Data is fetched =>", dbResponse)
        return res.status(200).send({result: dbResponse})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}



module.exports = {
    insertProductInDB, findFeatureProduct
}