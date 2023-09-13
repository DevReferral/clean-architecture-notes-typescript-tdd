import { NotesResponseModel } from '../../../models/notes';

export default interface GetAllNotesUseCase {
  execute(): Promise<NotesResponseModel[]>;
}
