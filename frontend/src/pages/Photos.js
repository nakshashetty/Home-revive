import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider';
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import "../styles/Photos.css";

const imagePairs = [
  {
    id: 1,
    before: image1,
    after: image1,
    description: 'This work is done by Ramesh Kumar.Elevate your living space with a captivating living room makeover. These before and after images reveal a harmonious blend of comfort and style, transforming the ordinary into a cozy haven. Immerse yourself in the visual journey from a basic setup to a welcoming and aesthetically pleasing retreat.',
  },
  {
    id: 2,
    before: image2,
    after: image2,
    description: 'Work done by Sanjay Puri .Experience a bedroom makeover that harmonizes comfort and style effortlessly. These before and after images showcase a transformation from a simple space to a serene sanctuary. Immerse yourself in the visual journey of creating a dreamy and inviting bedroom retreat.',

  },
  {
    id: 3,
    before: image3,
    after: image3,
    description: 'Sanjiv Saini has done this beautiful makeover.Experience a stunning bathroom makeover by skilled artisans, transforming the ordinary into a luxurious oasis. Witness the seamless blend of modern design and meticulous craftsmanship in these before and after images. Immerse yourself in the visual journey from a functional space to a stylish retreat.',
  },
  {
    id: 4,
    before: image4,
    after: image4
    ,
    description: 'Manoj vermas excellent work,Witness a kitchen makeover that turns functionality into elegance. These before and after images showcase a seamless fusion of modern design and practicality. Experience the transformation from a simple kitchen to a stylish culinary haven.',
  },
  
];

// const Photos = () => {
//   return (
//     <div className="before-after-container">
//       <h2>Before and After</h2>
//       <p>See the difference of before and after.</p>

//       {imagePairs.map((pair) => (
//         <div key={pair.id} className="image-pair">
//           <BeforeAfterSlider
//             before={pair.before}
//             after={pair.after}
//             width={800}
//             height={500}
//             borderRadius={10}
//           />
//           <p>{pair.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

const Photos = () => {
  return (
    <div className="before-after-container">
      <h2 className="page-title">Before and After</h2>
      <p className="page-description">Explore stunning transformations and witness the magic of makeovers.</p>

      {imagePairs.map((pair) => (
        <div key={pair.id} className="image-pair">
          <BeforeAfterSlider
            before={pair.before}
            after={pair.after}
            width={800}
            height={500}
            borderRadius={10}
          />
          <div className="image-description">
            <h3>{pair.descriptionTitle}</h3>
            <p>{pair.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;