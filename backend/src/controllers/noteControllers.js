import Note from "../model/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller");
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    await newNote.save();
    res.status(201).json({ message: "Note Created Sucessfully" });
  } catch (error) {
    console.error("Error in createNotes controller");
    res.status(500).json({ message: "Internal server error" });
  }
}

export function updateNotes(req, res) {
  res.status(200).json({ message: "Note updated sucessfully" });
}

export function deleteNotes(req, res) {
  res.status(200).json({ message: "Note deleted sucessfully" });
}
