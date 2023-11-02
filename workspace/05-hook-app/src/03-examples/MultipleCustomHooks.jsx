import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHooks = () => {
1.56

  const { } = useCounter();
  const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/character/2');
  const { name, species } = !!data && data;

  return (
    <>
      <h1>The Rick and Morty API</h1>
      <hr />

      {
        (isLoading) ?
          (
            <div className='alert alert-info text-center'>
              Loading...
            </div>
          )
          : (
            <blockquote className='blockquote'>
              <h1 className='mb-1'>{name}</h1>
              <h3 className='blockquote-footer mt-2'>{species}</h3>
            </blockquote>
          )
      }

      <button className='btn btn-primary'>Next quote</button>
    </>
  );
}
