const router = require("express").Router()
require('dotenv').config()
const stripe = require("stripe")(process.env.STRIPE_KEY)
/* const KEY = "sk_test_51LJh5TCx0CP76PWrVKMBkQfuhm7tcgYZ2bhkx3yLApn3ugWiNEpd65V78uK3Z2nyJzNSt2Gaga1bkFYZIAWoddJZ00n9quwkln"
const stripe = require("stripe")(KEY) */

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "TTD"
        },

        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
})

module.exports = router;