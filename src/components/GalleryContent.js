import React, { useState } from "react";
import GalleryDetails from "./GalleryDetails";


export default function GalleryContent() {
    
  const data = [
    {
      title: "Places in Delhi",
      city: "Delhi",

      place: [
        {
          id: "1",
          imgurl:  "https://www.planetware.com/photos-large/IND/india-delhi-red-fort.jpg",
          title: "Old Delhi",
          best_Time: "Jan To April",
          available: true
        },
        {
          id: "2",
          imgurl: "https://himalayanrider.com/wp-content/uploads/2022/02/delhi-784x500-1.jpg",
              title: "Himalayan Rider",
              best_Time: "Jan To April",
              available: false
        },
        {
          id: "3",
          imgurl: "https://static.toiimg.com/photo/46382359.cms",
              title: "Thomas Cook",
              best_Time: "Jan To April",
              available: true
        },
        {
          id: "4",
          imgurl: "https://static.toiimg.com/photo/46382359.cms",
              title: "Culture of India",
              best_Time: "Jan To April",
              available: false
        },
      ],
    },

    {
      title: "Places in Mumbai",
      city: "Mumbai",

      place: [
        {
          id: "5",
          imgurl:  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/53/fa/caption.jpg?w=300&h=300&s=1",
          title: "Lonavala -Mumbai",
          best_Time: "Sep to Nov",
          available: false
        },
        {
          id: "6",
            imgurl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/5f/f1/caption.jpg?w=300&h=300&s=1",
            title: "Mumbai  Tour",
            best_Time: "Sep to Nov",
            available: true
        },
        {
          id: "7",
          imgurl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/68/27/1a/caption.jpg?w=300&h=300&s=1",
              title: "The Taj Hotel",
              best_Time: "Sep to Nov",
              available: false
        },
        {
          id: "8",
          imgurl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/53/fa/caption.jpg?w=300&h=300&s=1",
              title: "Awesome journey in Mumbai",
              best_Time: "Sep to Nov",
              available: false
        },
      ],
    },

    {
        title: "Places in Jharkhand",
        city: "Jharkhand",

        place: [
          {
            id: "9",
            imgurl:  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/48/68/f4/dassam-falls.jpg?w=500&h=-1&s=1",
            title: "Dasam Water Fall",
            best_Time: "Nov to Jan",
            available: true
          },
          {
            id: "10",
            imgurl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/43/4f/16/img-20171104-101501-largejpg.jpg?w=500&h=-1&s=1",
                title: "Jonha Water Fall",
                best_Time: "Nov to Jan",
                available: false
          },
          {
            id: "11",
            imgurl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/72/52/03/navlakha-temple-at-deoghar.jpg?w=500&h=-1&s=1",
                title: "Naulakha Mandir",
                best_Time: "Nov to Jan",
                available: false
          },
          {
            id: "12",
            imgurl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/47/88/ef/dewri-mandir.jpg?w=500&h=-1&s=1",
                title: "Deori Mandir in Jharkhand",
                best_Time: "Nov to Jan",
                available: true
          },
        ],
      },

      {
        title: "Places in Ladhakh",
        city: "Ladhakh",
  
        place: [
          {
            id: "13",
              imgurl: "https://www.holidify.com/images/tooltipImages/LADAKH.jpg",
              title: "Leh Ladhakh",
              best_Time: "Julay to Nov",
              available: true
            },
            { 
              id: "14",
              imgurl:  "https://www.holidify.com/images/tooltipImages/MANALI.jpg",
              title: "Manali",
              best_Time: "Julay to Nov",
              available: true
          },
          {
            id: "15",
            imgurl: "https://www.holidify.com/images/tooltipImages/MCLEODGANJ.jpg",
                title: "Mcleodganj",
                best_Time: "Julay to Nov",
                available: true
          },
          {
            id: "16",
            imgurl: "https://www.holidify.com/images/tooltipImages/SRINAGAR.jpg",
                title: "Shrinagar",
                best_Time: "Julay to Nov",
                available: false

          },
        ],
      },

      {
        title: "Places in Odisha",
        city: "Odisha",
  
        place: [
          {
            id: "17",
            imgurl:  "https://www.holidify.com/images/bgImages/KONARK.jpg",
            title: "Konark Mandir",
            best_Time: "Summer",
            available: false

          },
          {
            id: "18",
            imgurl: "https://www.holidify.com/images/bgImages/CUTTACK.jpg",
                title: "Culture Capital",
                best_Time: "Summer",
                available: true
          },
          {
            id: "19",
            imgurl: "https://www.holidify.com/images/bgImages/TALASARI-BEACH.jpg",
                title: " Talasari Beach",
                best_Time: "Summer",
                available: true
          },
          {
            id: "20",
            imgurl: "https://www.holidify.com/images/cmsuploads/compressed/709_20190409181326.jpg",
                title: "Gopalpur Beach",
                best_Time: "Summer",
                available: true
          },
        ],
      },


  ];


  const [picture, setPicture] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [displayGallery, setDisplayGallery] = useState("");

  


  return (
    <>
    {/* {console.log(data)} */}
    <nav className="container" style={{backgroundColor: ""}}>
    {
       data.map((pic)=>{
          return (
            <ul class="nav justify-content-center" key={pic.id}>
              {console.log(pic.place)}
                <li class="nav-item d-flex flex-row">
                  <button class="nav-link active btn  fs-4">{pic.city}</button>
                </li>
            </ul>)
          })
        }       
    </nav>

    <div className="Gallery">
      {data.map((item) => {
        return <GalleryDetails item={item} />;
      })}
    </div>
    </>
  );
}
