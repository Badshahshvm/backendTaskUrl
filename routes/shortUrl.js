const express = require("express")
const { apiLimiter } = require("../middlewares/rateEmitter")
const { shortenUrl, redirectToUrl, getStats } = require("../controller/shortUrl")

const router = express.Router()
router.post("/shorten", apiLimiter, shortenUrl)
router.get("/:shortId", redirectToUrl)
router.get("/stats/:shortId", apiLimiter, getStats)

module.exports = router
