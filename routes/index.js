const express = require('express');
const dbConn = require('../config/db.config');
const router = express.Router();
const connection = require('../config/db.config')
const con = connection
const bodyParser = require('body-parser');
const app = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  con.query("SELECT * FROM produk", function(err, row, fields){
    if(err){
      console.log("Error: ", err);
    }else{
      // console.log(JSON.stringify(row))
      console.log("sukses")
      const data = JSON.stringify(row)
      res.render('index', { 
        title: 'Express',
        row
      });
    }
  })

  
});


router.post('/createProduct', (req) => {

  const dataProduk = {
    nama_produk: req.body.nama_produk,
    keterangan : req.body.keterangan,
    harga      : req.body.harga,
    jumlah     : req.body.jumlah
  }
  
  // console.log(dataProduk)
  con.query('Insert INTO produk SET?', dataProduk, function(err, res){
    if(err){
      console.log("Error: ", err);
    }else{
      console.log("Sukses")
      return res
    }
  })
});

router.post('/updateProduct', (req, res) => {
  const nama_produkold = req.body.nama_produkold
  const nama_produk = req.body.nama_produk
  const keterangan  = req.body.keterangan
  const harga       = req.body.harga
  const jumlah     = req.body.jumlah
  
  con.query(`UPDATE produk SET nama_produk = "${nama_produk}", keterangan = "${keterangan}", harga = "${harga}", jumlah = "${jumlah}" WHERE nama_produk = "${nama_produkold}"`, function(err, res){
    if(err){
      console.log("Error: ", err);
    }else{
      console.log("Sukses")
    }
  })
  
});

router.get('/deleteProduct/:param', (req) => {
  const nama_produk = req.params.param

  con.query(`DELETE FROM produk WHERE nama_produk = "${nama_produk}"`, function(err, res){
    if(err){
      console.log("Error: ", err);
    }else{
      console.log("Sukses Delete")
      return res
    }
  })
  
});

module.exports = router;
