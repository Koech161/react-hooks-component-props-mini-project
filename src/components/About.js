import React from "react";

function About (blogData){
    return(
        
        <aside>
            <img src={blogData.image} alt="blog logo" />

            <p>{blogData.about}</p>
        </aside>
       
        
        
    )
}
About.defaultProps={
    image:'https://via.placeholder.com/215'
}
export default About