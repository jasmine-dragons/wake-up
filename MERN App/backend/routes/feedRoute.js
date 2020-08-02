const Router = require("express").Router();
let feedItem = require("../models/feedModel");

Router.route("/get").get((req, res) => {
  feedItem
    .find()
    .then((feed) => res.json(feed))
    .catch((err) => res.status(400).json("Error" + err));
});

Router.route("/").post((req, res) => {
  const title = req.body.title;
  const location = req.body.location;
  const theme = req.body.theme;
  const link = req.body.link;
  const action = req.body.action;
  const newItem = new feedItem({ title, location, theme, link, action });

  newItem
    .save()
    .then(() => res.json("item added"))
    .catch((err) => res.status(400).json("error" + err));
});

Router.route("/:id").get((req, res) => {
  feedItem
    .findById(req.params.id)
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("error" + err));
});

Router.route("/:id").delete((req, res) => {
  feedItem
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted"))
    .catch((err) => res.status(400).json("error" + err));
});

Router.route("/update/:id").post((req, res) => {
  feedItem
    .findById(req.params.id)
    .then((item) => {
      item.title = req.body.title;
      item.location = req.body.location;
      item.theme = req.body.theme;
      item.link = req.body.link;
      item.action = req.body.action;

      item
        .save()
        .then((item) => res.json("updated"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("error" + err));
});

module.exports = Router;
