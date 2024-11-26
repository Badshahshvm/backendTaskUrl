const Url = require("../models/Url");
const { nanoid } = require("nanoid");
const { isValidUrl } = require("../utils/validUrl");

const shortenUrl = async (req, res) => {
              try {
                            if (!isValidUrl(req.body.originalUrl)) {
                                          return res.json({ success: false, message: 'Invalid URL' });
                            }

                            ;

                            let url = await Url.findOne({ originalUrl: req.body.originalUrl });

                            if (!url) {
                                          const shortId = nanoid(8);
                                          const newUrl = new Url({ originalUrl: req.body.originalUrl, shortId: shortId });
                                          await newUrl.save()
                                          res.json({
                                                        success: true,
                                                        message: "shortId created sucessfully",
                                                        url: newUrl
                                          })
                            }

                            res.json({
                                          success: true,
                                          shortUrl: `${url.shortId}`,
                            });
              } catch (err) {
                            res.json({
                                          success: false,
                                          message: "shortId of URL is created sucessfully",
                                          message: err.message,
                            });
              }
};


const redirectToUrl = async (req, res) => {
              try {
                            const url = await Url.findById(req.params.shortId);
                            if (!url) {
                                          return res.status(404).json({ success: false, message: 'URL not found' });
                            }

                            url.clicks += 1;
                            url.lastAccessed = new Date();
                            await url.save();

                            res.redirect(url.originalUrl);

              }
              catch (err) {
                            res.json({
                                          success: false,
                                          message: err.message
                            })
              }
}

const getStats = async (req, res) => {
              try {
                            const url = await Url.findById(req.params.shortId);
                            if (!url) {
                                          return res.json({ success: false, message: 'URL not found' });

                            }
                            res.json({
                                          sucess: true,
                                          message: "Url stats here",
                                          url: url
                            })

              }
              catch (err) {
                            res.json({
                                          success: false,
                                          message: err.message
                            })
              }
}
module.exports = { shortenUrl, redirectToUrl, getStats };
