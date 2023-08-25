const express = require("express");
const router = express();
const api = require("../api/books");

router.post('/',api.Postdata)

router.get('/test',api.testpublic)
router.get('/',api.getAllData)
router.get('/:id',api.getByid)
router.delete('/:id',api.deleteData)
router.put('/:id',api.updateData)

module.exports = router;
