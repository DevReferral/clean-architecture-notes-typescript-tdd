import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../../domain/models/notes';

export default interface NotesDataSource {
  getAll(): Promise<NotesResponseModel[]>;
  getOne(id: string): Promise<NotesResponseModel | null>;
  create(note: NotesRequestModel): Promise<NotesResponseModel>;
  updateOne(id: string, data: NotesRequestModel): Promise<NotesResponseModel>;
  deleteOne(id: string): Promise<void>;
}
