import { Link } from "react-router-dom"

export const HeroCard = ({ 
  id,
  superhero,
  alter_ego,
  characters,
}) => {

  const imagePath = `/assets/${ id }.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">

        <div className="row no-gutters">
          <div className="col-4">
            <img src={ imagePath } className="card-img" alt={ superhero }/>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>
              <p className="card-text"><strong>Alter Ego:</strong> { alter_ego }</p>

              {
                ( alter_ego !== characters ) && 
                  <p className="text-muted"><strong>Other Names:</strong> { characters }</p>
              }

              <Link to={`/hero/${ id }`}>More...</Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
