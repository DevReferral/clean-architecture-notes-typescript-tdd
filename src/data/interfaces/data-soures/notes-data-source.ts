import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../../domain/models/notes';

export interface NotesDataSource {
  create(note: NotesRequestModel): Promise<NotesResponseModel>;
  getOne(id: string): Promise<NotesResponseModel | null>;
  updateOne(id: string, data: NotesRequestModel): Promise<NotesResponseModel>;
  deleteOne(id: string): Promise<void>;
  getAll(): Promise<NotesResponseModel[]>;
}
