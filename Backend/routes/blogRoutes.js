const express = require('express');
const router=express.Router();

router.get('/all-blog',getAllBlogsController)
router.post('/create-blog',createBlogController)
router.put('/update-blog/:id',updateBlogController)
router.get('/get-blog/:id',getBlogById)
router.delete('/delete-blog/:id',deleteBlogController)
module.exports=router