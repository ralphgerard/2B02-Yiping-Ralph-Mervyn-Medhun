const router = require("express").Router();
const connection = require("../database.js");
var cors = require('cors');
router.use(cors());
//Create Community
router.post('/createCommunity', (req, res) => {
    
    var communityName = req.body.name;
    var communityImage = req.body.image;
    var nsfwTag = req.body.nsfw;
    var userid = req.body.userid
    const createCommunityQuery = `
    INSERT INTO communities(community_name, community_image , NSFW_community, userid)
    VALUES ($1, $2, $3, $4);
        `;
  
    connection.query(createCommunityQuery, [communityName, communityImage, nsfwTag, userid], (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'Error while creating community' });
      } else {
        console.log(results);
        if (results.rowCount === 1) {
          res.status(200).json({ message: 'Successfully created community' });
        } else {
          res.status(404).json({ error: `Unable to create community ${communityName}` });
        }
      }
    });
  });

module.exports = router;