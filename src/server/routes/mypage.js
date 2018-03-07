const express = require("express");
const BabyController = require("../controllers/baby");
const BillingController = require("../controllers/billing");
const router = express.Router();

router.get("/baby", BabyController.get);
router.post("/baby", BabyController.post);
router.put("/baby", BabyController.put);
router.delete("/baby", BabyController.delete);

router.get("/billing", BillingController.get);
router.put("/billing", BillingController.put);

module.exports = router;