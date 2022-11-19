import styles from "./PersonPage.module.css";
import { useParams } from "react-router-dom";
import { getApiResource } from "../../data/dataFetch";
import React, { useEffect, useState, Suspense } from "react";
import { API_HEROES } from "../../constants/api";
import { getHeroImage } from "../../data/getHeroData";
import PersonLinkBack from "./PersonLinkBack";
import { useDispatch, useSelector } from "react-redux";
import {
  setPersonToFavourite,
  removePersonFromFavourite,
} from "../../store/actions";
import iconFavourite from "./img/favourite.svg";
import iconFavouriteFill from "./img/favourite-fill.svg";

const HeroMatches = React.lazy(() => import("../../components/HeroMatches"));

export default function PersonPage() {
  const [personInfo, setPersonInfo] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [realHeroName, setRealHeroName] = useState(null);
  const [isOpenLazy, setIsOpenLazy] = useState(false);
  const [personFavourite, setPersonFavourite] = useState(false);

  const storeData = useSelector((state) => state.favouriteReducer);
  const params = useParams();
  const currentId = params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(API_HEROES);

      storeData[currentId]
        ? setPersonFavourite(true)
        : setPersonFavourite(false);

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
          Attribute: obj.primary_attr,
          "Attack type": obj.attack_type,
          "Amount of legs": obj.legs,
          Roles: obj.roles,
        };
      });

      setPersonInfo(function showStats() {
        for (let item of newPerson) {
          return Object.entries(
            newPerson[currentId >= 25 ? currentId - 2 : currentId - 1]
          ).map((person) => {
            return (
              <li key={person.toString()} className={styles.list__item}>
                <span>{person[0] + ": " + person[1]}</span>
              </li>
            );
          });
        }
      });

      const heroName = person[
        currentId >= 25 ? currentId - 2 : currentId - 1
      ].name.replace("npc_dota_hero_", "");
      const img = getHeroImage(heroName);
      setPersonPhoto(img);
      setRealHeroName(
        person[currentId >= 25 ? currentId - 2 : currentId - 1].localized_name
      );
    })();
  }, [currentId]);

  const dispatchFavouritePeople = () => {
    if (personFavourite) {
      dispatch(removePersonFromFavourite(currentId));
      setPersonFavourite(false);
    } else {
      dispatch(
        setPersonToFavourite({
          [currentId]: {
            name: realHeroName,
            img: personPhoto,
          },
        })
      );
      setPersonFavourite(true);
    }
  };

  return (
    <>
      <PersonLinkBack />
      <h1 className={styles.name}>{realHeroName}</h1>
      <div className={styles.container}>
        <div className={styles.favourite__container}>
          <img src={personPhoto} alt="name" className={styles.photo} />
          <img
            src={personFavourite ? iconFavouriteFill : iconFavourite}
            alt="add to favourite"
            onClick={dispatchFavouritePeople}
            className={styles.favourite}
          />
        </div>
        <div className={styles.list}>
          <ul>{personInfo}</ul>
        </div>
      </div>
      <div className={styles.otherContainer}>
        {isOpenLazy && (
          <Suspense fallback={<div>Loading...</div>}>
            <HeroMatches currentId={currentId} />
          </Suspense>
        )}
        {isOpenLazy && (
          <button className="btn" onClick={() => setIsOpenLazy(false)}>
            Hide match's stats
          </button>
        )}
        {!isOpenLazy && (
          <button className="btn" onClick={() => setIsOpenLazy(true)}>
            Show match's stats
          </button>
        )}
      </div>
    </>
  );
}
