import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  private messages: string[] = [
    'Studio Ghibli films are known for their stunning animation and heartwarming stories often featuring strong female characters.',
    'The over-the-top action sequences and dramatic fight scenes are a hallmark of the shounen genre, popular with young male viewers.',
    'From slice-of-life comedies to sci-fi epics, anime offers a vast array of genres to cater to all interests.',
    'Many anime characters have elaborate hairstyles and expressive eyes that convey a wide range of emotions.',
    'Catchphrases and iconic lines from popular anime series are often quoted and referenced by fans.',
   'Cosplay, the art of dressing up as your favorite anime characters, is a major aspect of anime fandom and a popular convention activity.',
    'The power systems in anime can be incredibly complex, from chakra in Naruto to Stands in JoJos Bizarre Adventure.',
    'Mecha anime features giant robots controlled by humans, often in epic battles against alien invaders or other giant robots.',
   'The influence of anime can be seen in Western animation, with some shows adopting a more anime-inspired style.',
    'Openings and endings, the theme songs played at the beginning and end of anime episodes, are often catchy and visually stunning.',
    'Food plays a big role in many anime series, with mouthwatering dishes that can make you crave Japanese cuisine.',
    'Attending anime screenings with fellow fans can be a fun and social experience.',
    'Learning basic Japanese phrases can enhance your enjoyment of anime, as some jokes or puns dont translate well.',
    'Theres a never-ending stream of new anime series being produced, so theres always something fresh to discover.',
    'Whether youre a longtime fan or just starting to explore the world of anime, theres something for everyone to enjoy.'
  ];

  getRandomMessage(): string {
    const index = Math.floor(Math.random() * this.messages.length);
    return this.messages[index];
  }

}
