const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET Root
router.get('', async (req, res) => {
    try {

        const locals = {
            'title': "Node js blog",
            'description': "THis is a blog site with Nodejs "
        }
        let perPage = 5;
        let page = req.query.page || 1;

        const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

        const count = await Post.count();
        const nextPage = parseInt(page) + 1;
        const hasnextPage = nextPage <= Math.ceil(count / perPage);

        res.render('index',
            {
                locals,
                data,
                current: page,
                nextPage: hasnextPage ? nextPage : null
            });

    } catch (error) {
        console.log(error);
    }

});


// GET Post: id 
router.get('/post/:id', async (req, res) => {
    try {
        let slug = req.params.id;
        const data = await Post.findById({ _id: slug });

        const locals = {
            'title': data.title,
            'description': "THis is a blog site with Nodejs "
        }
        res.render('post', { locals, data });
    } catch (error) {
        console.log(error);
    }
})

// POST searhTerm 

router.post('/search', async (req, res) => {
    try {
       
        let searchTerm = req.body.searchTerm ; 
        let searchTermNospecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g , "") ; 
        
        const data = await Post.find({
            $or: [
                {title : {$regex: new RegExp( searchTermNospecialChar , 'i')}} , 
                {body : {$regex: new RegExp( searchTermNospecialChar , 'i')}}
            ]
        })
        res.render('search' , {data}) ; 
        
    } catch (error) {
        console.log(error);
    }
})

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;


// function insertData(){
//     Post.insertMany([{
//         title: "This is a sample blog",
//         body: "HEllo loremlkjs sdfkjs df sdjf kjiie ddjijsdkfj os sar you gonnado this too me or what "
//     },
//     {
//         title: "This is a sample blog",
//         body: "HEllo loremlkjs sdfkjs df sdjf kjiie ddjijsdkfj os sar you gonnado this too me or what "
//     },
//     {
//         title: "This is a sample blog",
//         body: "HEllo loremlkjs sdfkjs df sdjf kjiie ddjijsdkfj os sar you gonnado this too me or what "
//     },
//     {
//         title: "This is a sample blog",
//         body: "HEllo loremlkjs sdfkjs df sdjf kjiie ddjijsdkfj os sar you gonnado this too me or what "
//     },
//     {
//         title: "This is a sample blog",
//         body: "HEllo loremlkjs sdfkjs df sdjf kjiie ddjijsdkfj os sar you gonnado this too me or what "
//     },
//     {
//         title: "This is a sample blog",
//         body: "HEllo loremlkjs sdfkjs df sdjf kjiie ddjijsdkfj os sar you gonnado this too me or what "
//     },
//     {
//         title: "This is a sample blog",
//         body: "HEllo loremlkjs sdfkjs df sdjf kjiie ddjijsdkfj os sar you gonnado this too me or what "
//     },
//   ]);
// }
// insertData() ; 
