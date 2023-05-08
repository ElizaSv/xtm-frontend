import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import placeholderImage from "../../Placeholder.svg"

const EmployeeInfo = ({userId, token}) => {
const [data, setData] = useState(null);
const [image, setImage] = useState(placeholderImage)

useEffect(()=> {
        fetch(`https://xtm-api.onrender.com/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
}, [])

useEffect(() => {
  if (data && data.user && data.user.profileImg) {
    setImage(`/media/${data.user.profileImg}`);
  }
}, [data]);

const handleImageError = (event) => {
  event.target.src = placeholderImage;
};

  return (
    <>
    {data &&
    <div id="employee-greeting">
       <img src={image} alt="User Profile Photo" onError={handleImageError} />
       <h2>You are logged in as <span>{data.user.email}</span> </h2>
       <div>
            <div className="quote-box"><h3><em>The secret behind a great day is a great attitude.</em></h3></div>
            <Link to="/dashboard"><FontAwesomeIcon icon={faArrowRight} style={{marginRight: "10px"}} />Dive in</Link>
       </div>
    </div>
    }
   </>
  )
}

export default EmployeeInfo