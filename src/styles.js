//!!Section Wrappers!!

//Section with dark background + vertical padding
export const sectionWrapper = `
  bg-[#1b263b] 
  py-16
`;

//Generic section wrapper with spacing + max-width center
export const sectionBase = `
  py-20 
  max-w-5xl 
  mx-auto 
  px-6
`;


//!!Headings & Text!!

//Large bold centered title
export const sectionTitle = `
  text-3xl 
  font-bold 
  text-center 
  mb-8
`;

//Generic heading style
export const headingBase = `
  text-3xl 
  font-bold 
  text-center 
  mb-8
`;

//Base paragraph style for readable text
export const paragraphBase = `
  text-gray-300 
  leading-relaxed
`;


//!!Grids!!

//Responsive grid wrapper for cards
export const gridWrapper = `
  grid 
  grid-cols-1 
  md:grid-cols-2 
  gap-6 
  max-w-5xl 
  mx-auto 
  px-6
`;


// !!Cards!!

//Default card container (background, padding, hover effects)
export const cardBase = `
  bg-[#0d1b2a] 
  rounded-lg 
  p-6 
  shadow-md
  transition 
  hover:bg-cyan-400 
  hover:text-[#0d1b2a]
`;

//Hover effects only (can be added separately)
export const cardHover = `
  hover:bg-cyan-400 
  hover:text-[#0d1b2a]
`;

//Small padding option for compact cards
export const cardPaddingSmall = `
  py-4
`;

//Larger padding option for spacious cards
export const cardPaddingLarge = `
  p-6
`;

//Emphasized card text
export const cardText = `
  font-semibold
`;

//Card title style (larger, bold)
export const cardTitle = `
  text-xl 
  font-bold 
  mb-2
`;

//Card description text
export const cardDesc = `
  text-sm 
  mb-4
`;

//Link inside cards (cyan, underline on hover)
export const cardLink = `
  text-cyan-400 
  font-semibold 
  hover:underline
`;


//!!Buttons & Links!!

//Primary button style
export const buttonBase = `
  bg-cyan-400 
  text-[#0d1b2a] 
  px-6 
  py-3 
  rounded-lg 
  font-semibold 
  hover:bg-cyan-300 
  transition
`;

//Inline link style
export const linkBase = `
  text-cyan-400 
  font-semibold 
  hover:underline
`;
