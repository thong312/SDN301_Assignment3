const Orchids = require('../models/orchids')
class OrchidController {
    index(req, res) {
        Orchids.find({}).populate('category')
            .then((orchids) => {
                res.render('orchids', { orchids: orchids });
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }
    create(req, res) {
        console.log(req.body);
        const orchid = new Orchids(req.body);
        orchid.save()
            .then(() => {
                res.redirect('/orchids');
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).send('Internal Server Error' );
            });
    }
    remove(req, res) {
        Orchids.findByIdAndDelete(req.params.orchidId)
            .then(() => {
                // Chuyển hướng người dùng đến trang hiển thị danh sách orchids
                res.redirect('/orchids');
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }

    formEdit(req, res, next) {
        const orchidId = req.params.orchidId;
        Orchids.findById(orchidId)
            .then((orchid) => {
                res.render('editOrchid', {
                    title: 'Edit Orchid',
                    orchid: orchid,
                });
            })
            .catch(next);
    }

    edit(req, res) {
        const orchidId = req.params.orchidId;

        Orchids.findByIdAndUpdate(orchidId, req.body, { new: true })
            .then((updatedOrchid) => {
                if (!updatedOrchid) {
                    console.error('Orchid not found for update');
                    return res.status(404).json({ error: 'Orchid not found' });
                }
                res.redirect('/orchids')
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }
    view(req, res) {
        Orchids.findById(req.params.orchidId)
            .then((orchid) => {
                res.render('orchidDetail', { orchid: orchid });
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }
    
      
}
module.exports = new OrchidController