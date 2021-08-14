import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/loading";
import Header from "../../components/nameHeader/Header";
import Quotes from "../../components/quotes/quotes";
import getByName from "../../lib/getByName";
import NotFound from "./notFound";
import { Helmet } from "react-helmet";

const NamePage = () => {
  let { name } = useParams();
  const [characterData, setCharacterData] = useState();
  const [notFound, setNotFound] = useState(false);
  useEffect(async () => {
    const charData = await getByName(name, true);
    if (charData.length != 1) {
      setNotFound(true);
    } else {
      setCharacterData(charData[0]);
      setNotFound(false);
    }
  }, [name]);
  if (notFound) {
    return <NotFound />;
  }
  if (!characterData) {
    return <Loading />;
  }
  return (
    <div>
      <Helmet>
        <title>BC - {characterData.name}</title>
      </Helmet>
      <Header
        image={characterData.img}
        name={characterData.name}
        nickName={characterData.nickname}
        dob={characterData.birthday}
        status={characterData.status}
        occupation={characterData.occupation}
        portrayed={characterData.portrayed}
        appearance={characterData.appearance}
      />
      <Quotes name={characterData.name} />
    </div>
  );
};

export default NamePage;
