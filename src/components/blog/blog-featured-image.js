import React from 'react';

const BlogFeaturedImage = props => {
    if (!props.img){
        return null;
    }

    return(
        <div className="featured-image-wrapper">
            <img src={props.img}/>
        </div>
    );
}

export default BlogFeaturedImage;


// just in case

    // {featured_image_url ?(

    // <div className="featured-image-wrapper">
    //   <img src={featured_image_url} />
    // </div>
    // ) : null}