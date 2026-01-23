// Utility to get correct image paths for different environments
export const getImagePath = (imageName) => {
  const base = import.meta.env.BASE_URL || '/Portfolio-website/'
  return `${base}images/${imageName}`
}
