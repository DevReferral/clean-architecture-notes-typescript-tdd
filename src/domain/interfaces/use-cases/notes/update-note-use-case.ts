import { NotesRequestModel, NotesResponseModel } from '../../../models/notes';

export default interface UpdateNoteUseCase {
  expect(id: string, note: NotesRequestModel): Promise<NotesResponseModel>;
}
