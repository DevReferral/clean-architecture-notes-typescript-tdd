import NotesRepository from '../interfaces/repositories/notes-repository';
import GetAllNotesUseCase from '../interfaces/use-cases/notes/get-all-notes-use-case';
import { NotesResponseModel } from '../models/notes';

export default class GetAllNotes implements GetAllNotesUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}

  async execute(): Promise<NotesResponseModel[]> {
    const notes = await this.notesRepository.getAllNotes();

    return notes;
  }
}
