import NotesRepository from '../interfaces/repositories/notes-repository';
import DeleteNoteUseCase from '../interfaces/use-cases/notes/delete-note-use-case';

export default class DeleteNote implements DeleteNoteUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}
  async execute(id: string): Promise<void> {
    const result = await this.notesRepository.deleteNote(id);

    return result;
  }
}
