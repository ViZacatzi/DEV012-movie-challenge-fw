import { render } from '@testing-library/react';
import  MovieHome  from '../Paginas/MovieHome';
import { MemoryRouter } from 'react-router-dom';
import * as router from 'react-router';

const navigate = jest.fn();
jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

describe('Proceso de autenticación', () => {
  it('Debe llamar navigate con /', () => {
    // Arrange
    render(<MovieHome />, { wrapper: MemoryRouter });
  });
});