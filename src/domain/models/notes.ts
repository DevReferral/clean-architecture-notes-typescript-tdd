export type NotesResponseModel = {
  id: number;
  content: string;
  important: boolean;
};

export type NotesRequestModel = Omit<NotesResponseModel, 'id'>;
