import { useParams } from "react-router-dom";
import Loading from "../../layout/Loading";
import TableClass from "./TableClass";
import BackArrow from "../../../img/back_arrow.webp"
import { Link } from 'react-router-dom';
import { UseFetchApiDed } from "../../../hooks/UseFetchApiDed";

export default function ShowClass() {
  const { classSelected } = useParams();
  const {classRpg, removeLoading, error} = UseFetchApiDed(`https://www.dnd5eapi.co/api/classes/${classSelected}`);
  
  if(error) {
    return <div>Error loading class data.</div>;
  }

  return (
    <div className="min-h-screen bg-cor-bg p-4">
      <Link to="/buscarclasses"><img className='h-10' src={BackArrow} alt="BackArrow" /></Link>
      {classRpg && (
        <ul>
          <li className="text-orange-800 text-4xl pl-1">{classRpg.name}</li>

          <li className="text-2xl">Class Features</li>

          <li>
            <p>Hit Dice: 1d{classRpg.hit_die}</p>
            <p>
              Hit points at 1st level: {classRpg.hit_die} + Constitution
              modifier
            </p>
            <p>
              Hit points at higher levels: 1d{classRpg.hit_die}{" "}
              {`(or ${classRpg.hit_die / 2 + 1})`} + Constitution modifier per{" "}
              {classRpg.name}{" "} level
            </p>
          </li>

          <li>
            <p>Proficiencies: </p>
            <ul className="pl-3">
              {classRpg.proficiencies &&
                classRpg.proficiencies.map((prof) => {
                  return <> {prof.name},</>;
                })}
              <br />
              Skills:
              {classRpg.proficiency_choices &&
                classRpg.proficiency_choices.map((profSkills) => {
                  return <li>- {profSkills.desc}</li>;
                })}
            </ul>
          </li>

          <li>
            <p className="text-xl">Equipaments: </p>
            {classRpg.starting_equipment_options &&
              classRpg.starting_equipment_options.map((equipaments) => {
                return <li className="pl-3">- {equipaments.desc}</li>;
              })}
          </li>

          <li className="pt-4">
            <TableClass classSelected={classSelected} />
          </li>
        </ul>
      )}
      {!removeLoading && <Loading />}
    </div>
  );
}
