const express = require("express");
const router = express.Router();
const Notes = require("./model");

router.get("/", async (req, res) => {
  const notes = await Notes.find();

  res.status(200).send(notes);
});

router.get("/:id", async (req, res) => {
  const notes = await Notes.findById(req.params.id);

  res.status(200).send(notes);
});

router.post("/", async (req, res) => {
  const notes = new Notes({ title: req.body.title, note: req.body.note });
  const newNotes = await notes.save();

  res.status(200).send(newNotes);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const newNote = await Notes.findByIdAndUpdate(
    id,
    { title: req.body.title, note: req.body.note },
    { new: true }
  );

  res.status(200).send(newNote);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const newNote = await Notes.findByIdAndDelete(id);

  res.status(200).send(newNote);
});
module.exports = router;
