import NotesRepository from '../interfaces/repositories/notes-repository';
import UpdateNoteUseCase from '../interfaces/use-cases/notes/update-note-use-case';
import { NotesRequestModel, NotesResponseModel } from '../models/notes';

export default class UpdateNote implements UpdateNoteUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}

  async execute(
    id: string,
    note: NotesRequestModel
  ): Promise<NotesResponseModel> {
    const result = await this.notesRepository.updateNote(id, note);

    return result;
  }
}
