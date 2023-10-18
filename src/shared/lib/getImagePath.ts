const getImagePath = (imageName: string): string | undefined => {
  const images = import.meta.glob('/assets/img/*.jpg');
  console.log(images);

  const imagePath = Object.keys(images).find((path) => path.includes(imageName));

  console.log(imagePath);
  return imagePath;
};

export default getImagePath;
