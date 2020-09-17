import React from 'react';

const ShowResult = (props) => {
    const {searchInfo,items} = props;
 
    const Info = () => {
        if ( items.length !=0 ) {
            return  (<>
                About {searchInfo.totalResults}  results ({searchInfo.formattedSearchTime} seconds)
            </>)
        } else {
            return '';
        }
    }

    const AllList = (params) => {
       return items.map(result=>(
            <>
                   <div className="show__detail">
                   <div className="show__displaylink">
                     <a href={result.link}>  {result.displayLink}  </a>
                   </div>
                   <div className="show__title">
                       <a href={result.link} target="_sonu">{result. title}</a>
                   </div>
                   <div className="show__desc">
                   {result.snippet}
                   </div>
               </div>
            </>
        ))
    }
    return (
        <div className="show__result"> 
               <div className="show__info">  <Info/>    </div>
                <AllList/>            

        </div>
    );
};

export default ShowResult;