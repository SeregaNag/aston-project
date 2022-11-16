import PropTypes from "prop-types";
import styles from "./PersonPage.module.css";
import { useParams } from "react-router-dom";
import { getApiResource } from "../../data/dataFetch";
import { useEffect, useState } from "react";
import { API_HEROES } from "../../constants/api";
import { getHeroName, getHeroImage } from "../../data/getHeroData";

export default function PersonPage() {
  const [personInfo, setPersonInfo] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const params = useParams();
  const currentId = params.id;

  useEffect(() => {
    (async () => {
      const res = await getApiResource(API_HEROES);

      const person = res.map(
        ({
            name,
          localized_name,
          id,
          primary_attr,
          attack_type,
          legs,
          roles,
        }) => {
          return {
            name,
            localized_name,
            primary_attr,
            id,
            attack_type,
            legs,
            roles,
          };
        }
      );

      const newPerson = person.map(function (obj) {
        return {
          Name: obj.localized_name,
          Attribute: obj.primary_attr,
          "Attack type": obj.attack_type,
          "Amount of legs": obj.legs,
          Roles: obj.roles,
        };
      });

      setPersonInfo(function showStats() {
        for (let item in newPerson) {
          return Object.entries(
            newPerson[currentId >= 25 ? currentId - 2 : currentId - 1]
          ).map((person) => {
            return <li>{person[0] + ":" + " " + person[1]}</li>;
          });
        }
      });
      console.log(person)
      const heroName = person[
        currentId >= 25 ? currentId - 2 : currentId - 1
      ].name.replace("npc_dota_hero_", "");;
      console.log(heroName)
      const img = getHeroImage(heroName);
      setPersonPhoto(img);
    })();
  }, [currentId]);

  return (
    <>
        <img src={personPhoto} alt='name'/>
      <div>{personInfo}</div>
    </>
  );
}

PersonPage.propTypes = {};
