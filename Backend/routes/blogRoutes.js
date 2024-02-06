const express = require('express');
const {getAllBlogsController,createBlogController,updateBlogController,getBlogById,deleteBlogController}=require('../controller/blogController')
const router=express.Router();

router.get('/all-blogs',getAllBlogsController)
router.post('/create-blog',createBlogController)
router.put('/update-blog/:id',updateBlogController)
router.get('/get-blog/:id',getBlogById)
router.delete('/delete-blog/:id',deleteBlogController)
module.exports=router