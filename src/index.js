const {map, random, reduce, forEach} = require('lodash');

const text = `A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.

 a certain angle relative to a light source. Thus, a rainbow is not an object and cannot be physically approached. Indeed, it is impossible for an observer to see a rainbow from water droplets at any angle other than the customary one of 42 degrees from the direction opposite the light source. Even if an observer sees another observer who seems "under" or "at the end of" a rainbow, the second observer will see a different rainbow—farther off—at the same angle as seRainbows can be full circles; however, the average observer sees only an arc formed by illuminated droplets above the ground,[1] and centred on a line from the sun to the observer's eye.

In a primary rainbow, the arc shows red on the outer part and violet on the inner side. This rainbow is caused by light being refracted when entering a droplet of water, then reflected inside on the back of the droplet and refracted again when leaving it.

In a double rainbow, a second arc is seen outside the primary arc, and has the order of its colours reversed, with red on the inner side of the arc.

A rainbow is not located at a specific distance from the observer, but comes from an optical illusion caused by any water droplets viewed fromen by the first observer.

Rainbows span a continuous spectrum of colours. Any distinct bands perceived are an artefact of human colour vision, and no banding of any type is seen in a black-and-white photo of a rainbow, only a smooth gradation of intensity to a maximum, then fading towards the other side. For colours seen by the human eye, the most commonly cited and remembered sequence is Newton's sevenfold red, orange, yellow, green, blue, indigo and violet,[2][3] remembered by the mnemonic, Richard Of York Gave Battle In Vain (ROYGBIV).

Rainbows can be caused by many forms of airborne water. These include not only rain, but also mist, spray, and airborne dew.

Rainbows can be observed whenever there are water drops in the air and sunlight shining from behind the observer at a low altitude angle. Because of this, rainbows are usually seen in the western sky during the morning and in the eastern sky during the early evening. The most spectacular rainbow displays happen when half the sky is still dark with raining clouds and the observer is at a spot with clear sky in the direction of the sun. The result is a luminous rainbow that contrasts with the darkened background. During such good visibility conditions, the larger but fainter secondary rainbow is often visible. It appears about 10° outside of the primary rainbow, with inverse order of colours.

The rainbow effect is also commonly seen near waterfalls or fountains. In addition, the effect can be artificially created by dispersing water droplets into the air during a sunny day. Rarely, a moonbow, lunar rainbow or nighttime rainbow, can be seen on strongly moonlit nights. As human visual perception for colour is poor in low light, moonbows are often perceived to be white.[4]

It is difficult to photograph the complete semicircle of a rainbow in one frame, as this would require an angle of view of 84°. For a 35 mm camera, a wide-angle lens with a focal length of 19 mm or less would be required. Now that software for stitching several images into a panorama is available, images of the entire arc and even secondary arcs can be created fairly easily from a series of overlapping frames.

From above the earth such as in an airplane, it is sometimes possible to see a rainbow as a full circle. This phenomenon can be confused with the glory phenomenon, but a glory is usually much smaller, covering only 5–20°.

The sky inside a primary rainbow is brighter than the sky outside of the bow. This is because each raindrop is a sphere and it scatters light over an entire circular disc in the sky. The radius of the disc depends on the wavelength of light, with red light being scattered over a larger angle than blue light. Over most of the disc, scattered light at all wavelengths overlaps, resulting in white light which brightens the sky. At the edge, the wavelength dependence of the scattering gives rise to the rainbow.

Light of primary rainbow arc is 96% polarised tangential to the arch.[6] Light of second arc is 90% polarised.

When sunlight encounters a raindrop, part is reflected but part enters, being refracted at the surface of the raindrop. When this light hits the back of the drop, some of it is reflected off the back. When the internally reflected light reaches the surface again, once more some is internally reflected and some is refracted as it exits the drop. (The light that reflects off the drop, exits from the back, or continues to bounce around inside the drop after the second encounter with the surface, is not relevant to the formation of the primary rainbow.) The overall effect is that part of the incoming light is reflected back over the range of 0° to 42°, with the most intense light at 42°.[18] This angle is independent of the size of the drop, but does depend on its refractive index. Seawater has a higher refractive index than rain water, so the radius of a "rainbow" in sea spray is smaller than a true rainbow. This is visible to the naked eye by a misalignment of these bows.[19]

The reason the returning light is most intense at about 42° is that this is a turning point – light hitting the outermost ring of the drop gets returned at less than 42°, as does the light hitting the drop nearer to its centre. There is a circular band of light that all gets returned right around 42°. If the sun were a laser emitting parallel, monochromatic rays, then the luminance (brightness) of the bow would tend toward infinity at this angle (ignoring interference effects). (See Caustic (optics).) But since the sun's luminance is finite and its rays are not all parallel (it covers about half a degree of the sky) the luminance does not go to infinity. Furthermore, the amount by which light is refracted depends upon its wavelength, and hence its colour. This effect is called dispersion. Blue light (shorter wavelength) is refracted at a greater angle than red light, but due to the reflection of light rays from the back of the droplet, the blue light emerges from the droplet at a smaller angle to the original incident white light ray than the red light. Due to this angle, blue is seen on the inside of the arc of the primary rainbow, and red on the outside. The result of this is not only to give different colours to different parts of the rainbow, but also to diminish the brightness. (A "rainbow" formed by droplets of a liquid with no dispersion would be white, but brighter than a normal rainbow.)

The light at the back of the raindrop does not undergo total internal reflection, and some light does emerge from the back. However, light coming out the back of the raindrop does not create a rainbow between the observer and the sun because spectra emitted from the back of the raindrop do not have a maximum of intensity, as the other visible rainbows do, and thus the colours blend together rather than forming a rainbow.

A rainbow does not exist at one particular location. Many rainbows exist; however, only one can be seen depending on the particular observer's viewpoint as droplets of light illuminated by the sun. All raindrops refract and reflect the sunlight in the same way, but only the light from some raindrops reaches the observer's eye. This light is what constitutes the rainbow for that observer. The whole system composed by the sun's rays, the observer's head, and the (spherical) water drops has an axial symmetry around the axis through the observer's head and parallel to the sun's rays. The rainbow is curved because the set of all the raindrops that have the right angle between the observer, the drop, and the sun, lie on a cone pointing at the sun with the observer at the tip. The base of the cone forms a circle at an angle of 40–42° to the line between the observer's head and their shadow but 50% or more of the circle is below the horizon, unless the observer is sufficiently far above the earth's surface to see it all, for example in an aeroplane (see above).[21][22] Alternatively, an observer with the right vantage point may see the full circle in a fountain or waterfall spray.`;

const tokenize = (str) => str.split(/\s+/);
const randChoice = (arr) => {
  const idx = random(0, arr.length - 1);
  return arr[idx];
}

const ngramSize = 4;
const max = 65;
const lines = (str) => str.split('\n');
const trim = (str) => str.trim();
const chain = {
  beginnings: [],
  dict: {}
}

const foo = (acc, line) => {
  const tokens = tokenize(line);
  if (tokens.length >= ngramSize) {
    const nTokens = tokens.slice(0, tokens.length - ngramSize);
    const beginning = nTokens.slice(0, ngramSize).join(' ');
    acc.beginnings.push(beginning);
    forEach(nTokens, (_, idx) => {
      const gram = nTokens.slice(idx, idx + ngramSize).join(' ');
      const next = nTokens[idx + ngramSize];
      if(!acc.dict[gram]) { acc.dict[gram] = [] };
      acc.dict[gram].push(next);
    });
  }
  return acc;
};

const textlines = lines(text);
const res = reduce(textlines, foo, chain)
let start = randChoice(res.beginnings)
const output = tokenize(start);

for(let i = 0; i < max; i++) {
  if(res.dict[start]) {
    const nextOptions = res.dict[start];
    const next = randChoice(nextOptions);
    output.push(next);
    start = output.slice(output.length - ngramSize, output.length).join(' ');
  } else {
    break;
  }
}
console.log(output.join(' '));