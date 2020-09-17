import React, { useEffect } from 'react';
import { FaMicrophone,FaSistrix } from 'react-icons/fa';
import { SEID,APIkey } from '../Config/Google/API';
import ShowResult from './ShowResult';
const Search = (props) => {
    const [state,setState] = React.useState(props.location.state?props.location.state:"");
    const [searchInfo,setSearchInfo] =React.useState('');
    const [items,setItems] =React.useState([]);
    const goToHome = () => {
        props.history.push("/");
    }

    useEffect(() => {
        const url=`https://www.googleapis.com/customsearch/v1?key=${APIkey}&cx=${SEID}&q=${state}`;
        fetch( new Request (url)  )
        .then(res=>res.json())
        .then((data) => {
            // console.log(data);
            setItems(data.items);
            setSearchInfo(data.searchInformation);
        })
        .catch(err=>console.error(err));
         
    },[])
    const googleSeach = (e) => {
      e.preventDefault(); 
        const url=`https://www.googleapis.com/customsearch/v1?key=${APIkey}&cx=${SEID}&q=${state}`;
        fetch( new Request (url)  )
        .then(res=>res.json())
        .then((data) => {
            // console.log(data);
            setItems(data.items);
            setSearchInfo(data.searchInformation);
        })
        .catch(err=>console.error(err));
    }
    console.log(items,searchInfo);
    return (
        <div className="search_container"> 
            <div className="search_container_box">
            <div className=" element">
            <div className="search_logo">
                    <img onClick={goToHome} src="/assets/images/google.png" alt="" className=""/>
                </div>
            <div className="search_form">
                    <form onSubmit={googleSeach} method="post">
                        <input value={state} className=" home__control" type="search" onChange={(e)=>setState(e.target.value)} name="query" id=""/>
                    </form>

                    <FaSistrix className="search_icon"/>
                    <FaMicrophone className="microphone"/>

                </div>
            </div>
            <div className="search_profile">
                    <img src="/assets/images/profile.jpg" alt="Proifile" className=""/>
            </div>
            </div>
            <hr/>
            <ShowResult searchInfo={searchInfo} items={items} />
        </div>
    );
};

export default Search;