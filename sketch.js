// THIS CODE CREATES PARTICLE EXPLOSIONS WHEN THE MOUSE IS CLICKED AT
// THE PLACE WHERE IT IS CLICKED.
// THIS CODE USES P5.js

particles = [] // Stores all the particles
createParticles = false // Controls when to create new particles
explosion = false // Controls when to render the explosion

function setup() {
  // Creates a canvas of 600*600 pixels
  createCanvas(1920, 1080)
}

function draw() {
  background(0)
  
  // Creates 400 new particles with random values when mouse is clicked
  if (createParticles) {
    for (i = 0; i<400; i++) {
      particles[i] = new Particle()
    }
    createParticles = false
  }
  
  // runs all the created particles when the mouse is clicked
  if (explosion) {
    for (i = 0; i<400; i++) {
      particles[i].run()
    }
  }
  
}

// Creates particles and renders the explosion when you mouseClicked
function mouseClicked() {
  createParticles = true
  explosion = true
}


// Class that helps create new particle objects
class Particle {
  // Contains all the varibles for a particle
  constructor() {
    this.x = mouseX
    this.y = mouseY
    this.radius = random(6, 20)
    this.speedX = random(-40, 40)
    this.speedY = random(-40, 40)
  }
  
  // Used to make particles move
  movement() {
    this.x += this.speedX
    this.y += this.speedY
  }
  
  // Used to render the particles and show them on the screen
  render() {
    fill(200)
    noStroke()
    ellipse(this.x, this.y, this.radius)
  }
  
  // One way solution to move and render the particles
  run() {
    this.movement()
    this.render()
  }
}