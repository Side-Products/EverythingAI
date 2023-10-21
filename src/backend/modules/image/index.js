const multer = require("multer");
const aws = require("aws-sdk");
const { v4: uuid } = require("uuid");
const sharp = require("sharp");

exports.uploadImageToAWS_S3 = async function (req, res) {
  console.log("\n--- AWS S3 Service ---\n");

  const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
      callback(null, "");
    },
  });
  const upload = multer({ storage }).single("file");

  try {
    upload(req, res, async (error) => {
      if (error) {
        console.log("Multer error:", error);
        res.status(500).send(error);
        return;
      }

      if (!req.file) {
        res.status(400).json({ error: "No file provided" });
        return;
      }

      const img = req.file.originalname.split(".");
      const imgType = img[img.length - 1];

      const compressedImageBuffer = await sharp(req.file.buffer)
        .jpeg({ quality: 80, mozjpeg: true })
        .toBuffer();
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${uuid()}.${imgType}`,
        Body: compressedImageBuffer,
      };

      s3.upload(params, (error, data) => {
        if (error) {
          res.status(500).send(error);
        }
        res.status(200).send(data);
      });
    });
  } catch (error) {
    console.log("S3 image upload error::", error);
  }
};
