import NotesRepository from '../interfaces/repositories/notes-repository';
import CreateNoteUseCase from '../interfaces/use-cases/notes/create-note-use-case';
import { NotesRequestModel, NotesResponseModel } from '../models/notes';

export class CreateNote implements CreateNoteUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}
  async execute(note: NotesRequestModel): Promise<NotesResponseModel> {
    console.log('Note recieved in create note use case', JSON.stringify(note));
    const result = await this.notesRepository.createNote(note);

    console.log('processed note being sent', JSON.stringify(result));
    return result;
  }
}
