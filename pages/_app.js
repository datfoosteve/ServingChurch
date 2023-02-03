import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'

export default function MyApp({ Component, pageProps }) {
  return (
  
      <>

    <Head>
      <title>The Serving Church</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="A community of believers led by Pastor Sam Thomas and his family, dedicated to spreading the love and message of Jesus Christ and serving our community with compassion and kindness." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS"
        href="/feed.xml"
      />
      <link
        rel="preload"
        href="/fonts/Inter-roman.latin.var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
    </Head>
    <div className="bg-slate">
      <header className="text-center">
        <img src="/logo.png" alt="The Serving Church logo" className="w-16 h-16 mx-auto my-4" />
        <h1 className="title text-3xl text-orange decoration-orange">The Serving Church</h1>
      </header>
      <nav className="flex justify-center my-4">
        <a href="#services" className="px-4">Services</a>
        <a href="#prayer" className="px-4">Prayer Line</a>
        <a href="#blog" className="px-4">Blog</a>
        <a href="#podcast" className="px-4">Podcast</a>
      </nav>
    </div>

    <main>

      <section id="welcome" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Welcome to The Serving Church</h1>
          <p className="text-xl text-center my-4">A community of believers led by Pastor Sam Thomas and his family, including his wife Hepsy and son Zion.</p>
          <p className="text-xl text-center">Our mission is to spread the love and message of Jesus Christ and to serve our community with compassion and kindness.</p>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
          <p className="text-xl text-center my-4">Join us every Sunday at Sunnyvale High School from 10:00am to 11:30am for worship, prayer, and fellowship as we grow in faith and serve those around us.</p>
        </div>
      </section>

      <section id="prayer" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Prayer Line <section id="prayer" className="bg-gray-200 py-16"> </section></h2>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">Prayer Line</h2>
            <p className="text-center my-4">At The Serving Church, we believe in the power of prayer. That's why we offer a prayer line for members of our community to submit their prayer requests and receive updates on answered prayers. If you or someone you know is in need of prayer, please submit your request below.</p>
          </div>
          <div className="flex justify-center">

            <form className="w-full max-w-sm">

              <div className="md:flex md:items-center mb-6">

                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-medium mb-2" for="name">
                    Name
                  </label>
                </div>


                <div className="md:w-2/3">
                  <input
                    className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-medium mb-2" for="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-medium mb-2" for="phone">
                    Phone Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="555-555-5555"
                  />
                </div>
                <div className="md:w-2/3">
                  <label className="block text-gray-500 font-medium mb-2" for="message">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                    id="message"
                    placeholder="Enter your prayer request here..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          </div>
      </section>




      <section id="blog" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Blog</h2>
          <div className="flex flex-wrap -mx-4">

            <div className="w-full md:w-1/3 px-4 mb-8">

              <div className="bg-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium">
                  Blog post title goes here
                </h3>
                <p className="text-gray-600 my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada, magna a faucibus tincidunt, quam augue...
                </p>
                <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded>">
                  Read More
                </a>
              </div>

            </div>

          </div>
        </div>

      </section>










      <section id="blog" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Blog</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium">Blog Post Title</h3>
                <p className="text-gray-600 my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada, magna a faucibus tincidunt, quam augue...
                </p>
                <a href="#" className="text-blue-500">
                  Read More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium">Blog Post Title</h3>
                <p className="text-gray-600 my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada, magna a faucibus tincidunt, quam augue...
                </p>
                <a href="#" className="text-blue-500">
                  Read More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium">Blog Post Title</h3>
                <p className="text-gray-600 my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada, magna a faucibus tincidunt, quam augue...
                </p>
                <a href="#" className="text-blue-500">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>





      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-center">
            Copyright &copy; {new Date().getFullYear()} The Serving Church
          </p>
        </div>
      </footer>


    </main>
  
  

</>
  )};



