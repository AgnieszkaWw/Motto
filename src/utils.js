import IMG_1 from './assets/c1.jpg'
import IMG_2 from './assets/c2.jpg'
import IMG_3 from './assets/c3.jpg'
import IMG_4 from './assets/c4.jpg'
import IMG_5 from './assets/c5.jpg'
import IMG_6 from './assets/c6.jpg'
import IMG_7 from './assets/c7.jpg'
import IMG_8 from './assets/c8.jpg'
import IMG_9 from './assets/c9.jpg'

export const images = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9];

export function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}