import { NotesResponseModel } from '../../../models/notes';

export default interface GetOneNotesUseCase {
  execute(id: string): Promise<NotesResponseModel | null>;
}
