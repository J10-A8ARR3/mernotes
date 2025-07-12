export function getAllNotes(req, res) {
  res.status(200).send("You just fetched a note");
}

export function createNotes(req, res) {
  res.status(201).json({ message: "Note created sucessfully" });
}

export function updateNotes(req, res) {
  res.status(200).json({ message: "Note updated sucessfully" });
}

export function deleteNotes(req, res) {
  res.status(200).json({ message: "Note deleted sucessfully" });
}