// import React from "react";
// import { architectCosts } from "../pages/architectCosts";
// import "../styles/cost.css";


// const getCostPerSqft = (buildingType, size) => {
//     // Implement the logic to calculate the cost per square foot based on building type and size
//     // Replace this with your actual implementation
//     // For now, returning a placeholder value of 15 for demonstration purposes
//     return 15;
//   };

  
// const Cost = ({ buildingType, size }) => {
//   const costPerSqft = getCostPerSqft(buildingType, size);

//   const buildingTypeLabel =
//     buildingType.charAt(0).toUpperCase() + buildingType.slice(1).toLowerCase();

   
//     size <= 1000
//       ? "Up to 1,000 sqft"
//       : size <= 2000
//       ? "1,001 to 2,000 sqft"
//       : size <= 3000
//       ? "2,001 to 3,000 sqft"
//       : size <= 5000
//       ? "Above 3,000 sqft"
//       : buildingType === "commercial" && size <= 10000
//       ? "5,001 to 10,000 sqft"
//       : size <= 20000
//       ? "10,001 to 20,000 sqft"
//       : "Above 20,000 sqft";

//   const totalCost = (costPerSqft * size).toFixed(2);

//   return (
//     <div className="cost-estimation">
//       <h2>Cost Estimation</h2>
//       <p>
//         For a {buildingTypeLabel} building with a size of {size} sqft, the estimated cost per sqft is: ${costPerSqft}
//       </p>
//       <p>
//         This estimation is based on the following cost ranges:
//       </p>
//       <ul>
//         <li>
//           {buildingTypeLabel} buildings up to 1,000 sqft: ${architectCosts[buildingType]["upTo1000sf"]} per sqft
//         </li>
//         <li>
//           {buildingTypeLabel} buildings from 1,001 to 2,000 sqft: ${architectCosts[buildingType]["1001to2000sf"]} per sqft
//         </li>
//         <li>
//           {buildingTypeLabel} buildings from 2,001 to 3,000 sqft: ${architectCosts[buildingType]["2001to3000sf"]} per sqft
//         </li>
//         <li>
//           {buildingTypeLabel} buildings above 3,000 sqft: ${architectCosts[buildingType]["above3000sf"]} per sqft
//         </li>
//         {buildingType === "commercial" && (
//           <>
//             <li>
//               Commercial buildings from 5,001 to 10,000 sqft: ${architectCosts["commercial"]["5001to10000sf"]} per sqft
//             </li>
//             <li>
//               Commercial buildings from 10,001 to 20,000 sqft: ${architectCosts["commercial"]["10001to20000sf"]} per sqft
//             </li>
//             <li>
//               Commercial buildings above 20,000 sqft: ${architectCosts["commercial"]["above20000sf"]} per sqft
//             </li>
//           </>
//         )}
//       </ul>
//       <p>
//         The estimated total cost for a {buildingTypeLabel} building of {size} sqft is: ${totalCost}
//       </p>
//     </div>
//   );
// };

// // ...

// export default Cost;