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

  router.get('/:id', async (req: Request, res: Response) => {
    try {
      const note = await getOneNoteUseCase.execute(req.params.id);

      res.json(note);
    } catch (err) {
      res.status(500).send({ message: 'Note with given id not found' });
    }
  });

  router.post('/', async (req: Request, res: Response) => {
    try {
      const note = await createNoteUseCase.execute(req.body);

      res.status(201).json(note);
    } catch (err) {
      res.status(500).send({ message: 'Note not created' });
    }
  });

  return router;
}
