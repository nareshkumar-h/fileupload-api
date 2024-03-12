const { Router } = require("express")
const { UploadController } = require("../controllers/upload")

const router = Router()
router.get("/", (req, res) => res.send("Express on Vercel"));
router.post("/uploads/initializeMultipartUpload", UploadController.initializeMultipartUpload)
router.post("/uploads/getMultipartPreSignedUrls", UploadController.getMultipartPreSignedUrls)
router.post("/uploads/finalizeMultipartUpload", UploadController.finalizeMultipartUpload)

module.exports = { router }
