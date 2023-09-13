import NotesRepository from '../interfaces/repositories/notes-repository';
import GetOneNotesUseCase from '../interfaces/use-cases/notes/get-one-note-use-case';
import { NotesResponseModel } from '../models/notes';

export default class GetOneNote implements GetOneNotesUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}

  async execute(id: string): Promise<NotesResponseModel | null> {
    const note = await this.notesRepository.getNote(id);

    return note;
  }
}
