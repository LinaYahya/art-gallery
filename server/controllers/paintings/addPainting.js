const { addPaintingSchema } = require('../../utils/validation');
const uploadImg = require('../../utils/uploadImg');
const { addPaintingQuery } = require('../../database/queries');

exports.addPainting = async (req, res, next) => {
  try {
    const { title, description, category, property } = JSON.parse(
      req.body.data,
    );
    const { paintingImg } = req.files;
    const { id } = req.user;
    if (req.files && req.files.paintingImg) {
      await addPaintingSchema.validate(
        { title, description, category, property, paintingImg },
        { abortEarly: false },
      );
      const { public_id: imgID, format } = await uploadImg(paintingImg.path);

      const { rows } = await addPaintingQuery(
        title,
        `${imgID}.${format}`,
        description,
        category,
        property,
        id,
      );
      res.status(201).json({
        StatusCode: 201,
        data: { rows },
        message: 'Painting added successfully',
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: 'You have to upload your image' });
    }
  } catch (err) {
    if (err.errors) {
      res.status(400).json({
        status: 400,
        message: err.errors,
      });
    } else if (err.message === 'upload image error') {
      res.status(500).json({
        status: 500,
        message: "couldn't upload image",
      });
    } else {
      next(err);
    }
  }
};
