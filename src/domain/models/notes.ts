export type NotesResponseModel = {
  id: string;
  content: string;
  important: boolean;
};

export type NotesRequestModel = Omit<NotesResponseModel, 'id'>;
