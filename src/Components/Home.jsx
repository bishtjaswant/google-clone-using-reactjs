import React, { useState } from 'react';
import { FaMicrophone, FaSistrix } from 'react-icons/fa';
const Home = (props) => {

    const [state,setState] = useState("");
  console.dir(props  );

    function searchSubission(e) {
        e.preventDefault();
      props.history.push('/search',state);
       
      }
 
    return (
        <div className="home">

            <div className="home__container">
                <div className="home__logo">
                    <img src="/assets/images/google.png" alt="Google log" />
                </div>
                <form onSubmit={searchSubission} className="home__form">
                    <input type="search" value={state} onChange={(e)=>setState(e.target.value)} className="home__control" name="query" id="" />
                    <div className="home__form__group">
                        <button type="submit" className="home__form__search_btn">Google Seach</button>
                        <button type="button" className="home__form__lucky_btn">I'm feeling Lucky</button>
                    </div>
                    <FaSistrix className="search_icon"/>
                    <FaMicrophone className="microphone"/>
                </form>
            </div>

        </div>
    );
};

export default Home;