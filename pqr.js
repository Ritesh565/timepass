const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Best online doubt clearing platform</title>
      <link rel="stylesheet" href="style.css">
      <link href="https://fonts.googleapis.com/css2?family=Gorditas&display=swap" rel="stylesheet">
      <link rel="stylesheet" media="screen and (max-width:1255px )" href="phone.css">
  </head>
  
  <body>
      <nav id="navbar">
          <div id="logo">
              <img src="logo6.jpg" alt="myonlinestudy.com">
          </div>
          <ul>
              <li class="item"><a href="#home">HOME</a></li>
              <li class="item"><a href="#services">SERVICES</a></li>
              <li class="item"><a href="#client-section">CLIENTS</a></li>
              <li class="item"><a href="#contact">CONTACT US</a></li>
  
          </ul>
      </nav>
      <section id="home">
          <h1 class="h-primary">Online Study Center </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis velit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita dicta molestias quasi?</p>
          <button class="btn">Your Doubts</button>
      </section>
      <section class="services-container">
          <h1 class="h-primary center">Our services</h1>
          <div id="services">
              <div id="phy" class="box">
                  <img src="physicsdoubt.jpg" alt="">
                  <h2 class="h-secondary center">Ask doubt(Physics)</h2>
                  <p class="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae id quo sapiente
                      fugiat rerum. Quo nisi voluptas illum, expedita voluptate nemo ea incidunt placeat mollitia iste.
                      Odio architecto sunt minima!</p>
  
              </div>
              <div id="chem" class="box">
                  <img src="chemistrydoubt.jpg" alt="">
                  <h2 class="h-secondary center">Ask doubt(Chemistry)</h2>
                  <p class="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae id quo sapiente
                      fugiat rerum. Quo nisi voluptas illum, expedita voluptate nemo ea incidunt placeat mollitia iste.
                      Odio architecto sunt minima!</p>
  
              </div>
              <div id="math" class="box">
                  <img src="mathdoubt.jpg" alt="">
                  <h2 class="h-secondary center">Ask doubt(Math)</h2>
                  <p class="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae id quo sapiente
                      fugiat rerum. Quo nisi voluptas illum, expedita voluptate nemo ea incidunt placeat mollitia iste.
                      Odio architecto sunt minima!</p>
  
              </div>
          </div>
      </section>
      <section id="client-section">
          <h1 class="h-primary center"> Our Clients</h1>
          <div id="clients">
              <div class="client-item">
                  <img src="microsoft.png" alt="our client">
              </div>
              <div class="client-item">
                  <img src="skype.png" alt="our client">
              </div>
              <div class="client-item">
                  <img src="telegram.png" alt="our client">
              </div>
              <div class="client-item">
                  <img src="twitter.jpg" alt="our client">
              </div>
  
          </div>
  
      </section>
      <section id="contact">
          <h1 class="h-primary center">Contact Us</h1>
          <div id="contact-box">
              <form action="noaction.php">
                  <div class="form-group">
                      <label for="name">Name: </label>
                      <input type="text" name="name" id="name" placeholder="Enter your name">
                  </div>
                  <div class="form-group">
                      <label for="email">E-mail: </label>
                      <input type="email" name="name" id="email" placeholder="Enter your email">
                  </div>
                  <div class="form-group">
                      <label for="phone">Phone:</label>
                      <input type="phone" name="name" id="phone" placeholder="Enter your phone">
                  </div>
              </form>
          </div>
      </section>
  
      <footer>
          <div class="center">
              copyright &copy; www.myonlinestudy.com.All rights are reserved!
          </div>
      </footer>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});