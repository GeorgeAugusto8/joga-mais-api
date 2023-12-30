var jwt = require('jsonwebtoken');
var crypto = require('crypto');
var uuid = require('uuid');

module.exports = {
    md5: (str) =>{
        return crypto.createHash('md5').update(str).digest('hex');
    },
    sha1: (str) => {
        return crypto.createHash('sha1').update(str).digest('hex');
    },
    hash: (str) => {
        let round1 = crypto.createHash('md5').update(str).digest('hex');
        let round2 = round1.split('').reverse().join('');
        let round3 = round2 + process.env.hash_salt;
        let round4 = crypto.createHash('sha1').update(round3).digest('hex');
        return round4;
    },
    uuid: () => {
        return uuid().replace(/\-/g, '');
    },
    check_token: (req, res, next) => {
        var token = req.headers['authorization'];
        
        if (!token){ 
            res.status(401).json({ error: true, message: 'No token provided.' });
            return false;
        }
        
        token = token.replace('Bearer ', '');
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
          if (err){
               res.status(401).json({ error: true, message: 'Failed to authenticate token.'});
               return false;
          }
          next(decoded.id);
        });
    },
    encryptWithAES: (text, passphrase) => {
        return AES.encrypt(text, passphrase).toString();
    },
    decryptWithAES: (ciphertext, passphrase) => {
        const bytes = AES.decrypt(ciphertext, passphrase);
        const originalText = bytes.toString(Utf8);
        return originalText;
    }
    
}