import React from "react";
import "./Destinations.css";
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";

// Import images here...
import img1 from '../../Assets/ashville.jpeg';
import img2 from '../../Assets/charleston.jpeg';
import img3 from '../../Assets/Myrtle-Beach-Boardwalk.jpg';
import img4 from '../../Assets/adirondack park.jpeg';
import img5 from '../../Assets/rayleigh.jpeg';
import img6 from '../../Assets/Niagara-Falls.webp';
import img7 from '../../Assets/blue ridge.jpeg';
import img8 from '../../Assets/new-york-statue-of-liberty_2x1.avif';
import img9 from '../../Assets/hudson.jpeg';
import img10 from '../../Assets/hilton head island.jpeg';

const Data = [
{

    id: 1,
    imgSrc: img5,
    destTitle: 'Raleigh',
    location: 'North Carolina, USA',
    grade: 'City Adventurer',
    fees: '$200',
    description: 'Experience the vibrant cultural scene, historic sites, and bustling food scene in the capital city of North Carolina.'
},
{
    id: 2,
    imgSrc: img2,
    destTitle: 'Charleston',
    location: 'South Carolina, USA',
    grade: 'City Adventurer',
    fees: '$180',
    description: 'Step back in time and explore the rich history, antebellum architecture, and charming streets of Charleston.'
},
{
    id: 3,
    imgSrc: img1,
    destTitle: 'Asheville',
    location: 'North Carolina, USA',
    grade: 'City Adventurer',
    fees: '$150',
    description: 'Immerse yourself in a vibrant arts scene, craft breweries, and stunning mountain scenery in the eclectic city of Asheville.'
},
{
    id: 4,
    imgSrc: img3,
    destTitle: 'Myrtle Beach',
    location: 'South Carolina, USA',
    grade: 'City Adventurer',
    fees: '$230',
    description: 'Enjoy sun, sand, and surf on the Grand Strand with pristine beaches, golf courses, and family-friendly attractions.'
},
{
    id: 5,
    imgSrc: img4,
    destTitle: 'Adirondack park',
    location: 'New York, USA',
    grade: 'Nature Explorer',
    fees: '$175',
    description: 'Discover endless outdoor adventures including hiking, skiing, and kayaking in the largest protected area in the contiguous United States.'
},
{
    id: 6,
    imgSrc: img6,
    destTitle: 'Niagara-Falls',
    location: 'New York, USA',
    grade: 'Nature Explorer',
    fees: '$300',
    description: 'Iconic cascading waterfalls straddling the border of Canada and the United States, captivating visitors with their breathtaking beauty.'
},
{
    id: 7,
    imgSrc: img7,
    destTitle: 'Blue ridge',
    location: 'North Carolina, USA',
    grade: 'Nature Explorer',
    fees: '$300',
    description: 'Experience stunning panoramic views, hiking trails, and charming mountain communities in the picturesque Blue Ridge Mountains.'
},
{
    id: 8,
    imgSrc: img8,
    destTitle: 'New York City',
    location: 'New York, USA',
    grade: 'City Adventurer',
    fees: '$280',
    description: 'Immerse yourself in the vibrant energy, iconic landmarks, and diverse culture of the city that never sleeps.'
},
{
    id: 9,
    imgSrc: img9,
    destTitle: 'Hudson River Valley',
    location: 'New York, USA',
    grade: 'City Adventurer',
    fees: '$180',
    description: 'Explore charming towns, historic sites, and scenic landscapes along the majestic Hudson River in upstate New York.'
},
{
    id: 10,
    imgSrc: img10,
    destTitle: 'Hilton',
    location: 'South Carolina, USA',
    grade: 'City Adventurer',
    fees: '$180',
    description: 'Unwind on pristine beaches, play world-class golf, and indulge in luxury resorts on the idyllic Hilton Head Island.'
}

];

const Main = () => {
    return (
        <section className="main">
            <div className="secTitle">
                <h3 className="title">Most visited Destinations</h3>
            </div>
            <div className="grid secContent">
                {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
                    <div key={id} className="destinationCard">
                        <div className="cardImage">
                            <img src={imgSrc} alt={destTitle} />
                            <div className="cardOverlay">
                                <div className="overlayContent">
                                    <p className="grade">{grade}</p>
                                    <p className="fees">{fees}</p>
                                    <p className="description">{description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardContent">
                            <h4>{destTitle}</h4>
                            <div className="cardInfo">
                                <HiOutlineLocationMarker className="icon" />
                                <span>{location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Main;