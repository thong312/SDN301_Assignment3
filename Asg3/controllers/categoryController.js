const Categories = require('../models/catagories');

class CategoryController {
    index(req, res) {
        Categories.find({})
            .then((categories) => {
                res.render('categories', { categories: categories });
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }

    create(req, res) {
        console.log(req.body);
        const category = new Categories(req.body);
        category.save()
            .then(() => {
                res.redirect('/categories');
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).send('Internal Server Error' );
            });
    }

    remove(req, res) {
        Categories.findByIdAndDelete(req.params.categoryId)
            .then(() => {
                // Redirect the user to the page displaying the list of categories
                res.redirect('/categories');
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }

    formEdit(req, res, next) {
        const categoryId = req.params.categoryId;
        Categories.findById(categoryId)
            .then((category) => {
                res.render('editCategory', {
                    title: 'Edit Category',
                    category: category,
                });
            })
            .catch(next);
    }

    edit(req, res) {
        const categoryId = req.params.categoryId;

        Categories.findByIdAndUpdate(categoryId, req.body, { new: true })
            .then((updatedCategory) => {
                if (!updatedCategory) {
                    console.error('Category not found for update');
                    return res.status(404).json({ error: 'Category not found' });
                }
                res.redirect('/categories')
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }

    view(req, res) {
        Categories.findById(req.params.categoryId)
            .then((category) => {
                res.render('categoryDetail', { category: category });
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }
}

module.exports = new CategoryController();
