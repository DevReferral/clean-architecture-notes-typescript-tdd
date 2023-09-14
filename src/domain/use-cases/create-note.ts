import NotesRepository from '../interfaces/repositories/notes-repository';
import CreateNoteUseCase from '../interfaces/use-cases/notes/create-note-use-case';
import { NotesRequestModel, NotesResponseModel } from '../models/notes';

export class CreateNote implements CreateNoteUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}
  async execute(note: NotesRequestModel): Promise<NotesResponseModel> {
    const result = await this.notesRepository.createNote(note);

    console.log('create note use case', JSON.stringify(result));
    return result;
  }
}
