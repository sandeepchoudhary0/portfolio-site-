import React from 'react';
import './certifications.css';

const Certifications = () => {
  const blocks = [
    {
      imgSrc: 'https://via.placeholder.com/300',
      title: 'Block Title 1',
      description: 'This is a small description for block 1.',
    },
    {
      imgSrc: 'https://via.placeholder.com/300',
      title: 'Block Title 2',
      description: 'This is a small description for block 2.',
    },
    {
      imgSrc: 'https://via.placeholder.com/300',
      title: 'Block Title 3',
      description: 'This is a small description for block 3.',
    },
  ];

  return (
    <section id='certifications'>
        <span className='Title'>Certifications</span>
        <span className='Desc'>I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly products. I have a strong understanding of design and a keen eye for detail.I am proficient in Python, HTML, CSS, Java and JavaScript, as well as software such as Visual Studio and Jupyter.</span>

    <div className="blocks">
      {blocks.map((block, index) => (
        <div className="image-block" key={index}>
          <img src={block.imgSrc} alt={block.title} />
          <div className="overlay">
            <h2>{block.title}</h2>
            <p>{block.description}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Certifications;