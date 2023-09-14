import request from 'supertest';
import CreateNoteUseCase from '../../../src/domain/interfaces/use-cases/notes/create-note-use-case';
import DeleteNoteUseCase from '../../../src/domain/interfaces/use-cases/notes/delete-note-use-case';
import GetAllNotesUseCase from '../../../src/domain/interfaces/use-cases/notes/get-all-notes-use-case';
import GetOneNotesUseCase from '../../../src/domain/interfaces/use-cases/notes/get-one-note-use-case';
import UpdateNoteUseCase from '../../../src/domain/interfaces/use-cases/notes/update-note-use-case';
import { NotesResponseModel } from '../../../src/domain/models/notes';
import NotesRouter from '../../../src/presentation/routers/notes-router';
import server from '../../../src/server';
import {
  getMockCreateNoteUseCase,
  getMockDeleteNoteUseCase,
  getMockGetAllNotesUseCase,
  getMockGetOneNoteUseCase,
  getMockUpdateNoteUseCase,
} from '../../helpers/notesRouterHelper';
describe('Note Router', () => {
  let mockDeleteNoteUseCase: DeleteNoteUseCase;
  let mockCreateNoteUseCase: CreateNoteUseCase;
  let mockUpdateNoteUseCase: UpdateNoteUseCase;
  let mockGetAllNotesUseCase: GetAllNotesUseCase;
  let mockGetOneNoteUseCase: GetOneNotesUseCase;

  beforeAll(() => {
    mockDeleteNoteUseCase = getMockDeleteNoteUseCase();
    mockCreateNoteUseCase = getMockCreateNoteUseCase();
    mockUpdateNoteUseCase = getMockUpdateNoteUseCase();
    mockGetAllNotesUseCase = getMockGetAllNotesUseCase();
    mockGetOneNoteUseCase = getMockGetOneNoteUseCase();

    server.use(
      '/notes',
      NotesRouter(
        mockDeleteNoteUseCase,
        mockCreateNoteUseCase,
        mockUpdateNoteUseCase,
        mockGetAllNotesUseCase,
        mockGetOneNoteUseCase
      )
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /notes', () => {
    it('should return 200 with data', async () => {
      const expectedData: NotesResponseModel[] = [
        { content: 'c', id: '1', important: true },
        { content: 'd', id: '2', important: false },
      ];

      jest
        .spyOn(mockGetAllNotesUseCase, 'execute')
        .mockImplementation(() => Promise.resolve(expectedData));

      //call the api endpoint

      const response = await request(server).get('/notes');

      expect(response.status).toBe(200);
    });

    it('returns 500 on use case error', async () => {
      jest
        .spyOn(mockGetAllNotesUseCase, 'execute')
        .mockImplementation(() => Promise.reject(Error()));

      const response = await request(server).get('/notes');

      expect(response.status).toBe(500);
      expect(response.body).toStrictEqual({ message: 'Error fetching notes' });
    });
  });
  describe('GET /notes/:id', () => {
    it('should return 200 with data', async () => {
      const expectedData: NotesResponseModel = {
        content: 'c',
        id: '1',
        important: true,
      };

      jest
        .spyOn(mockGetOneNoteUseCase, 'execute')
        .mockImplementation(() => Promise.resolve(expectedData));

      //call the api endpoint

      const response = await request(server).get('/notes/1');

      expect(response.status).toBe(200);
    });

    it('returns 500 on use case error', async () => {
      jest
        .spyOn(mockGetOneNoteUseCase, 'execute')
        .mockImplementation(() => Promise.reject(Error()));

      const response = await request(server).get('/notes/1');

      expect(response.status).toBe(500);
      expect(response.body).toStrictEqual({
        message: 'Note with id not found',
      });
    });
  });

  describe('POST /notes', () => {
    it('should return 200 with data', async () => {
      const expectedData: NotesResponseModel = {
        content: 'c',
        id: '1',
        important: true,
      };
      jest
        .spyOn(mockCreateNoteUseCase, 'execute')
        .mockImplementation(() => Promise.resolve(expectedData));

      const response = await request(server).post('/notes').send(expectedData);

      expect(response.status).toBe(201);
      expect(mockCreateNoteUseCase.execute).toBeCalledWith(expectedData);
    });
    it('returns 500 on use case error', async () => {
      jest
        .spyOn(mockCreateNoteUseCase, 'execute')
        .mockImplementation(() => Promise.reject(Error()));

      const response = await request(server).post('/notes');
      expect(response.status).toBe(500);
      expect(response.body).toStrictEqual({ message: 'Error creating note' });
    });
  });
  describe('UPDATE /notes/:id', () => {
    it('should return 200 with data', async () => {
      const expectedData: NotesResponseModel = {
        content: 'c',
        id: '1',
        important: true,
      };

      jest
        .spyOn(mockUpdateNoteUseCase, 'execute')
        .mockImplementation(() => Promise.resolve(expectedData));

      const response = await request(server).put('/notes/1').send(expectedData);

      expect(response.status).toBe(200);
      expect(mockCreateNoteUseCase.execute).toBeCalledWith(1, expectedData);
    });
    it.skip('returns 500 on use case error', async () => {
      jest
        .spyOn(mockCreateNoteUseCase, 'execute')
        .mockImplementation(() => Promise.reject(Error()));

      const response = await request(server).post('/notes');
      expect(response.status).toBe(500);
      expect(response.body).toStrictEqual({ message: 'Error creating note' });
    });
  });
});
