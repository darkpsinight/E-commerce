const router = require("express").Router();
const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")

//ADD PRODUCT
router.post("/add", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(
        req.body
        /* {
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img,
        categories: [req.body.categories],
        size: req.body.size,
        color: req.body.color,
        price: req.body.price
        } */
    )
    try {
        const addedProduct = await newProduct.save();
        res.status(200).json(addedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//FIND PRODUCT BY ID (ONLY FOR ADMIN ROLE)
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({ product });
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS (ONLY FOR ADMIN ROLE)
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCTS + QUERY -SORT & LIMIT (ONLY FOR ADMIN ROLE)
router.get("/query", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const products = query
            ? await Product.find().sort({ _id: -1 }).limit(3)
            : await Product.find();
        res.status(200).json({ products });
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await Product.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total_products: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;