import NotesRepository from '../interfaces/repositories/notes-repository';

export default class DeleteNote implements DeleteNoteUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}
  async execute(id: string): Promise<void> {
    const result = await this.notesRepository.deleteNote(id);

    return result;
  }
}
