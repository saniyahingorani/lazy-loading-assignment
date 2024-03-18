import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Footer from "../Component/Footer";
import Header from "../Component/Header";

function About() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
          .then((resp) => resp.json())
          .then((data) => {
            setPhotos(data);
            setLoading(false);
          });
    }, []);

    return (
        <div>
            <Header/>
            {/* Page Header */}
            <div className="container py-5">
                <h1 className="display-2">About Us</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link> {/* Navigation Link to Home */}
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            About Us
                        </li>
                    </ol>
                </nav>
            </div>
            {/* Page Header End */}
            <div className="container">
                <h2>About Component</h2>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="row">
                        {photos.map((photo) => (
                            <div className="col-md-3" key={photo.id}>
                                <div className="card">
                                    <img src={photo.thumbnailUrl} alt={photo.title} loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">{photo.title}</h5>
                                        <p className="card-text">{photo.albumId}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default About;
