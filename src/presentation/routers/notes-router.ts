import express, { Request, Response } from 'express';
import CreateNoteUseCase from '../../domain/interfaces/use-cases/notes/create-note-use-case';
import DeleteNoteUseCase from '../../domain/interfaces/use-cases/notes/delete-note-use-case';
import GetAllNotesUseCase from '../../domain/interfaces/use-cases/notes/get-all-notes-use-case';
import GetOneNotesUseCase from '../../domain/interfaces/use-cases/notes/get-one-note-use-case';
import UpdateNoteUseCase from '../../domain/interfaces/use-cases/notes/update-note-use-case';

export default function NotesRouter(
  deleteNoteUseCase: DeleteNoteUseCase,
  createNoteUseCase: CreateNoteUseCase,
  updateNoteUseCase: UpdateNoteUseCase,
  getAllNotesUseCase: GetAllNotesUseCase,
  getOneNoteUseCase: GetOneNotesUseCase
) {
  const router = express.Router();

  router.get('/', async (req: Request, res: Response) => {
    try {
      const note = await getAllNotesUseCase.execute();

      res.json(note);
    } catch (err) {
      res.status(500).send({ message: 'Error fetching notes' });
    }
  });

  return router;
}
