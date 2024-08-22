import Loading from "../../layout/Loading";
import { UseFetchApiDed } from "../../../hooks/UseFetchApiDed";

export default function TableClass({ classSelected }) {
  const {dataDed, removeLoading, error} = UseFetchApiDed(
    `https://www.dnd5eapi.co/api/classes/${classSelected}/levels`,
    [0]
  )
  const featuresClassList = [];

  if(error) {
    return <div>Error loading class data.</div>;
  }

  return (
    <div className="whitespace-normal overflow-x-auto min-w-full">
      <ul>
        <li className="flex text-center font-bold gap-4">
          <div className="min-w-[8em]">Level</div>

          <div className="min-w-[8em]">Proficiency Bonus</div>

          <div className="min-w-[24em]">Features</div>

          {dataDed[0] && dataDed[0].spellcasting ? (
            <>
              {dataDed[0].spellcasting.cantrips_known && (
                <div className="min-w-[8em]">Cantrips Known</div>
              )}

              {dataDed[0].spellcasting.spells_known && (
                <div className="min-w-[8em]">Spells Known</div>
              )}

              {dataDed[15].spellcasting.spell_slots_level_1 > 0 && (
                <div className="min-w-[24em]">
                  Slots
                  <div className="flex gap-4 items-center justify-center">
                    <p>1st</p>
                    <p>2st</p>
                    <p>3st</p>
                    <p>4st</p>
                    <p>5st</p>
                    {dataDed[15].spellcasting.spell_slots_level_6 > 0 && (
                      <>
                        <p>6st</p>
                        <p>7st</p>
                        <p>8st</p>
                        <p>9st</p>
                      </>
                    )}
                  </div>
                </div>
              )}

              {dataDed[0].spellcasting.spell_slots_level_1 > 0 &&
                dataDed[15].spellcasting.spell_slots_level_1 === 0 && (
                  <div className="min-w-[8em]">
                    Slot Level
                  </div>
                )}
            </>
          ) : (
            <></>
          )}
        </li>

        {dataDed &&
          dataDed.map((features) => {
            return (
              <li className="flex text-center gap-4">
                <div className="min-w-[8em]">
                  {features.level}
                </div>

                <div className="min-w-[8em]">+{features.prof_bonus}</div>

                <div className="min-w-[24em]">
                  {features &&
                    features.features.map((feature, index) => {
                    featuresClassList.push(feature.name)
                      return(
                      <p className="pr-1">
                      {index === features.features.length - 1 ? (
                        <span key={index}>{feature.name}</span>
                      ) : (
                        <span key={index}>{feature.name}, </span>
                      )}
                    </p>
                    )
          })}
                </div>

                {features.spellcasting && (
                  <>
                    {dataDed[0].spellcasting.cantrips_known && (
                      <div className="min-w-[8em]">
                        {features.spellcasting.cantrips_known}
                      </div>
                    )}

                    {dataDed[0].spellcasting.spells_known && (
                      <div className="min-w-[8em]">
                        {features.spellcasting.spells_known}
                      </div>
                    )}

                    {dataDed[15].spellcasting.spell_slots_level_1 > 0 && (
                      <div className="min-w-[24em] flex gap-7 items-center justify-center">
                        <p>{features.spellcasting.spell_slots_level_1}</p>
                        <p>{features.spellcasting.spell_slots_level_2}</p>
                        <p>{features.spellcasting.spell_slots_level_3}</p>
                        <p>{features.spellcasting.spell_slots_level_4}</p>
                        <p>{features.spellcasting.spell_slots_level_5}</p>

                        {dataDed[15].spellcasting.spell_slots_level_6 >
                          0 && (
                          <>
                            <p>{features.spellcasting.spell_slots_level_6}</p>
                            <p>{features.spellcasting.spell_slots_level_7}</p>
                            <p>{features.spellcasting.spell_slots_level_8}</p>
                            <p>{features.spellcasting.spell_slots_level_9}</p>
                          </>
                        )}
                      </div>
                    )}

                    {dataDed[0].spellcasting.spell_slots_level_1 > 0 &&
                      dataDed[15].spellcasting.spell_slots_level_1 ===
                        0 && (
                        <div className="min-w-[8em] flex items-center justify-center">
                          <p>
                            {features.spellcasting.spell_slots_level_1 > 0 && (
                              <>
                                1st -{" "}{features.spellcasting.spell_slots_level_1}{" "}slots
                              </>
                            )}
                          </p>
                          <p>
                            {features.spellcasting.spell_slots_level_2 > 0 && (
                              <>
                                2st -{" "}{features.spellcasting.spell_slots_level_2}{" "}slots
                              </>
                            )}
                          </p>
                          <p>
                            {features.spellcasting.spell_slots_level_3 > 0 && (
                              <>
                                3st -{" "}{features.spellcasting.spell_slots_level_3}{" "}slots
                              </>
                            )}
                          </p>
                          <p>
                            {features.spellcasting.spell_slots_level_4 > 0 && (
                              <>
                                4st -{" "}{features.spellcasting.spell_slots_level_4}{" "}slots
                              </>
                            )}
                          </p>
                          <p>
                            {features.spellcasting.spell_slots_level_5 > 0 && (
                              <>
                                5st -{" "}{features.spellcasting.spell_slots_level_5}{" "}slots
                              </>
                            )}
                          </p>
                        </div>
                      )}
                  </>
                )}
              </li>
            );
          })}
      </ul>
      {!removeLoading && <Loading />}
    </div>
  );
}
