import { useLocation, useNavigate } from 'react-router-dom';
import querySring from "query-string";
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useMemo } from 'react';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = querySring.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  })

  const { searchText } = formValues;

  const heroesFiltered = useMemo( () => getHeroByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
      <h1>Hero Search</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Search</h4>
          <hr />

          <form onSubmit={ handleSearch } className='d-grid gap-3'>
            <input 
              type='text' 
              className='form-control'
              placeholder='Find your Hero'
              name='searchText'
              autoComplete='off'
              value={ searchText }
              onChange={ handleInputChange }
            />

            <button 
              className='btn btn-outline-primary'
              type='submit'
            >
              Search...
            </button>
          </form>

        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          { (q === '') 
            ? <div className='alert alert-info'>Search a hero</div>
            : ( heroesFiltered.length === 0 ) 
              && <div className='alert alert-danger'>Not results found for the term: {q}</div>
            
          } 

          {
            heroesFiltered.map( hero => (
              <HeroCard
                key={ hero.id } 
                { ...hero }
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
