import { NotesRequestModel, NotesResponseModel } from '../../../models/notes';

export default interface CreateNoteUseCase {
  execute(note: NotesRequestModel): Promise<NotesResponseModel>;
}
