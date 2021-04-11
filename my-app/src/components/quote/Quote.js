import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "../../actions/quoteActions";
import Loading from "../loading/Loading";
import { colorList } from "./color";
import Title from "../title/Title";
import MyFooter from "../my-footer/MyFooter";
import { SIGNATURE } from "../../constants/common";

export default function Quote(props) {
  const dispatch = useDispatch();
  const { quotes, loading, error } = useSelector((state) => state.quote);
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState(
    colorList[Math.floor(Math.random() * colorList.length)]
  );
  const [visibleText, setVisibleText] = useState(true);

  const getRandomQuote = useCallback((quotes) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomCorlor =
      colorList[Math.floor(Math.random() * colorList.length)];
    setVisibleText(false);
    setTimeout(() => {
      setColor(randomCorlor);
      setQuote(randomQuote);
    }, 1000);
  }, []);

  const handleNewQuote = () => {
    getRandomQuote(quotes.quotes);
  };

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  useEffect(() => {
    if (quotes && quotes.quotes && quotes.quotes.length > 0) {
      getRandomQuote(quotes.quotes);
    }
  }, [getRandomQuote, quotes]);

  // When quote change then setVisibleText true to display text
  useEffect(() => {
    setVisibleText(true);
  }, [quote]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <span>{error}</span>
      ) : (
        <div
          className={`w-full h-screen bg-${color} transition-colors duration-1000 ease-in-out`}
        >
          <Title title="My Quote" />
          <div className={`flex items-center justify-center`}>
            <div className="wrapper lg:w-2/5 md:w-3/5 xsm:w-4/5 rounded p-8 bg-white transition-colors duration-1000 ease-in-out shadow-2xl">
              <div className="quote-box">
                <div className="quote-text text-center mb-5">
                  <span
                    className={`break-words text-2xl tracking-widest transition-all duration-1000 ease-in-out text-${color} ${
                      visibleText ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    &nbsp;{quote.quote}
                  </span>
                </div>
                <div
                  className={`quote-author tracking-widest text-right mb-5 transition-all duration-1000 ease-in-out text-${color} ${
                    visibleText ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span>- {quote.author}</span>
                </div>
                <div className="quote-btn flex justify-between">
                  <div className="social-wrapper">
                    <a
                      className={`inline-block p-2 px-4 mr-2 rounded transition-colors duration-1000 ease-in-out hover:opacity-70 bg-${color}`}
                      href="/#"
                    >
                      <FontAwesomeIcon
                        className="text-white"
                        icon={faTwitter}
                      />
                    </a>
                    <a
                      className={`inline-block p-2 px-4 rounded p-2" transition-colors duration-1000 ease-in-out hover:opacity-70 bg-${color}`}
                      href="/#"
                    >
                      <FontAwesomeIcon
                        className="text-white"
                        icon={faFacebook}
                      />
                    </a>
                  </div>
                  <button
                    className={`rounded p-2 px-4 tracking-widest transition-colors duration-1000 ease-in-out focus:outline-none hover:opacity-70 bg-
                    bg-${color}`}
                    onClick={handleNewQuote}
                  >
                    New quote
                  </button>
                </div>
              </div>
            </div>
          </div>
          <MyFooter
            styles="text-white"
            signature={SIGNATURE}
          />
        </div>
      )}
    </>
  );
}
