import { NotesRequestModel, NotesResponseModel } from '../../../models/notes';

export default interface UpdateNoteUseCase {
  execute(id: string, note: NotesRequestModel): Promise<NotesResponseModel>;
}
