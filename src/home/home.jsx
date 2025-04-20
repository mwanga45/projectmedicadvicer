import React from 'react';
import './Home.css';
import Navbar from '../component/navigation/navigation';

const cardData = [
  {
    title: 'Fruits & Vegetables',
    description: 'Rich in vitamins, minerals, and fiber, fruits and vegetables support digestion and boost immunity.',
    image: 'https://source.unsplash.com/featured/?fruits,vegetables'
  },
  {
    title: 'Lean Proteins',
    description: 'Proteins are essential for building and repairing tissues, and maintaining muscle mass.',
    image: 'https://source.unsplash.com/featured/?protein,lean'
  },
  {
    title: 'Whole Grains',
    description: 'Whole grains like brown rice and oats provide sustained energy and important nutrients.',
    image: 'https://source.unsplash.com/featured/?whole,grains'
  },
  {
    title: 'Dairy & Alternatives',
    description: 'Dairy products and fortified alternatives deliver calcium and vitamin D for bone health.',
    image: 'https://source.unsplash.com/featured/?dairy,health'
  },
  {
    title: 'Healthy Fats',
    description: 'Sources like nuts, seeds, and olive oil support brain function and heart health.',
    image: 'https://source.unsplash.com/featured/?healthy,fats'
  }
];

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <h1>What is a Balanced Diet?</h1>
      <p className="intro">
        A balanced diet includes a variety of foods in the right proportions to provide the nutrients your body needs to function effectively. Here are some key food groups and their benefits:
      </p>
      <div className="card-container">
        {cardData.map((card) => (
          <div key={card.title} className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

/* Home.css */


