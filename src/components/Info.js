import React from 'react'
import { useSelector} from 'react-redux'
import './info.scss';


function Info(props) {
  let users = useSelector(state => state?.myFirstReducer?.users);

  return (
      <div className="card">
      {users?.data.map((value, key) => {
          if(props.player_info.id === value.id)
          {
            return(
            <div className="card-body" key={key}>
              <div className="cardImg">
                  <img src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt="" />
              </div>
                  <h2 className=" card-title">{value.first_name} {value.last_name}</h2>
                  <p className="card-text">City : {value.team.city}</p>
                  <p className="card-text">division : {value.team.division}</p>
                  <p className="card-text">fullName : {value.team.full_name}</p>
                  <p className="card-text">Abbreviation : {value.team.abbreviation}</p>
            </div>
        )}
      })}
      </div>
  )
}
                                                      // {
                                                      //   "id": 14,
                                                      //   "first_name": "Ike",
                                                      //   "height_feet": null,
                                                      //   "height_inches": null,
                                                      //   "last_name": "Anigbogu",
                                                      //   "position": "C",
                                                      //   "team": {
                                                      //       "id": 12,
                                                      //       "abbreviation": "IND",
                                                      //       "city": "Indiana",
                                                      //       "conference": "East",
                                                      //       "division": "Central",
                                                      //       "full_name": "Indiana Pacers",
                                                      //       "name": "Pacers"
                                                      //   },
export default Info
