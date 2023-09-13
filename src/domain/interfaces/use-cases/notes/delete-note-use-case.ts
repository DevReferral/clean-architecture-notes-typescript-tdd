export default interface DeleteNoteUseCase {
  execute(id: string): Promise<void>;
}
