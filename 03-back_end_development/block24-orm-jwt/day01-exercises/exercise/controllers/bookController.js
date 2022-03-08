const router = require('express').Router();
const { Book } = require('../models');

const errors = {
  NOT_FOUND: 'NOT_FOUND',
}

const validate = require('../middlewares/validateBook');

router
  .get('/books', async (_req, res) => {
    const books = await Book.findAll();

    return res.status(200).json(books);
  });

router
  .route('/book')
  .post(validate.create, async (req, res) => {
    const book = await Book.create(req.data);

    return res.status(201).json(book);
  });

router
  .route('/book/:id')
  .get(async (req, res, next) => {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return next(errors.NOT_FOUND);
    };
    return res.status(200).json(book);
  })
  .put(validate.update, async (req, res) => {
    const { id } = req.params;
    const [book] = await Book.update(
      { ...req.data },
      { where: { id } }
    );

    if (!book) {
      return next(errors.NOT_FOUND);
    };

    return res.status(200).json(book);
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const book = await Book.destroy({ where: { id } });

    if (!book) {
      return next(errors.NOT_FOUND);
    }

    return res.status(204).end();
  });

module.exports = router;