import React, { useEffect, useState } from "react";
import getQuotesByName from "../../lib/getQuotesByName";
import Quote from "../quote/quote";
import classes from "./quotes.module.scss";
import { Empty } from "antd";

/**
 * creating all Quotes component
 * @param {String} name
 * @return {Component}
 */

const Quotes = ({ name }) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const quotes = await getQuotesByName(name); // getting all quotes by name
    setQuotes(quotes);
    setLoading(false);
  }, [name]);

  if (loading) {
    return <Loading />;
  }
  if (!quotes || quotes.length == 0) {
    return (
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
          marginTop: 10,
          marginBottom: 10,
        }}
        description={<span>No quotes found.</span>}
      ></Empty>
    );
  }

  return (
    <>
      <div className={classes.title}>QUOTES</div>

      <div className={classes.quotes}>
        {quotes.map((quote) => {
          return (
            <Quote
              key={quote.quote_id}
              message={quote.quote + " -- series " + quote.series}
            />
          );
        })}
      </div>
    </>
  );
};

export default Quotes;
