import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaArrowRight, FaArrowLeft, FaClock, FaTag, FaShare } from "react-icons/fa";
import "../styles/BlogPage.css";

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const blogPosts = [
    {
      id: 1,
      title: "Day 1: A Walk Through History: Our Journey to Intramuros and Rizal Park",
      date: "April 7, 2025",
      category: "Historical",
      readTime: "5 min read",
      excerpt: "On our first day in Manila, we visited Intramuros and Rizal Park. These places are very important in the history of the Philippines...",
      coverImage: "/intra6.jpg",
      content: "On our first day in Manila, we visited Intramuros and Rizal Park. These places are very important in the history of the Philippines, and going there helped us learn more about our past.\n\nIntramuros is known as the \"Walled City.\" When we entered, it felt like going back in time. The streets were made of stones, and the old buildings and walls showed how life was during the Spanish period. We walked around, took pictures, and learned a lot from what we saw. It was like being inside a big, open museum.\n\nAfter that, we went to Rizal Park, also called Luneta. This is where our national hero, Dr. Jose Rizal, was executed. When we visited the spot where he was shot, it felt very emotional. We also saw the path he walked before his death. It was a sad but powerful moment. We took pictures there too, to remember how brave he was.\n\nBeing in these places made us think about the sacrifices of our heroes. We felt proud to be Filipinos. It was not just a trip it was a way to understand and appreciate our history.",
      images: [
        "/intra.jpg",
        "/intra2.jpg",
        "/intra5.jpg",
        "/intra4.jpg",
        "/intra3.jpg",
        "/intra7.jpg"
      ]
    },
    {
      id: 2,
      title: "Day 2: Exploring Subic Bay – Art, Security, and Discovery",
      date: "April 8, 2025",
      category: "Industrial",
      readTime: "4 min read",
      excerpt: "Our second day was filled with interesting and eye-opening stops around Subic Bay...",
      coverImage: "/subic.jpg",
      content: "Our second day was filled with interesting and eye-opening stops around Subic Bay. We started the day at the Subic Bay Exhibition, where Mr. Marlon Ebanculla Montello welcomed us and guided us through a series of paintings. Each painting told a story about the Philippines—its past, present, and future. It was a unique way to learn about our country, and we appreciated how Mr. Montello explained each artwork with so much passion and meaning.\n\nAfter that, we headed to the Port of Subic Bay, where Engr. Jerome D. Saddi, ECE gave us an overview of how the port works. He showed us a map of the bay and explained its importance in trade and transportation. It was really interesting to see how everything is organized and how big of a role the port plays in our economy.\n\nWe also visited the Law Enforcement Department Annex, where we met Lieutenant Derek Grueso. He explained to us the safety policies and security measures in place around Subic Bay. It gave us a better understanding of how the area is protected and managed. We learned how discipline and order are maintained to keep everyone safe.\n\nBefore the day ended, we made a quick stop at Duty Free Subic. It was a fun experience! There were lots of imported snacks, chocolates, perfumes, and souvenirs. Some of us bought a few items to take home, and it was a nice way to end our day on a light note.",
      images: [
        "/subic2.jpg",
        "/subic3.jpg",
        "/subic4.jpg",
        "/subic8.jpg",
        "/subic6.jpg",
        "/subic9.jpg",
        "/subic7.jpg",
        "/subic5.jpg",
      ]
    },
    {
      id: 3,
      title: "Day 3: Exploring History at Museo ni Manuel L. Quezon, Museum of Natural History and the Presidential Cars Museum",
      date: "April 9, 2025",
      category: "Historical",
      readTime: "6 min read",
      excerpt: "On our third day, we had a chance to dive deeper into Philippine history with two fascinating stops...",
      coverImage: "/manuel2.jpg",
      content: "On our third day, we had a chance to dive deeper into Philippine history with two fascinating stops: the Museo ni Manuel L. Quezon and the Presidential Cars Museum.\n\nOur first stop was the Museo ni Manuel L. Quezon. Walking through the museum, we got to learn a lot about President Manuel L. Quezon, his contributions to the country, and his vision for the Philippines. The museum had old photos, personal items, and displays that painted a picture of his life and leadership. It was a quiet and thoughtful experience, and we left feeling proud of his legacy in shaping the country's future.\n\nAfter that, we headed to the Presidential Cars Museum, which was a totally different but equally amazing experience. The museum featured cars that were once used by the Presidents of the Philippines. We got to see the actual vehicles that carried past leaders, some of them incredibly old and rare. It was interesting to learn how these cars were not only used for transportation but also served as symbols of the country's history and leadership.\n\nBoth places gave us a deeper understanding of the people and the moments that helped shape the Philippines. We left with more knowledge, appreciation, and a lot of pictures to remember the day by.",
      images: [
        "/manuel.jpg",
        "/manuel3.jpg",
        "/manuel4.jpg",
        "/manuel5.jpg",
        "/manuel6.jpg",
        "/museum (1).jpg",
        "/museum (2).jpg",
        "/museum (3).jpg",
        "/museum (4).jpg",
        "/museum (5).jpg"
      ]
    },
    {
      id: 4,
      title: "Day 4: From Money to Machines – A Day of Discovery",
      date: "April 10, 2025",
      category: "Financial",
      readTime: "5 min read",
      excerpt: "Our fourth day was full of learning and excitement as we visited two very interesting places...",
      coverImage: "/bsp.jpeg",
      content: "Our fourth day was full of learning and excitement as we visited two very interesting places: the Banko Sentral ng Pilipinas (BSP) and HyTech Power Inc.\n\nAt Banko Sentral ng Pilipinas, we explored how Philippine money is made. We saw how bills are printed, how coins are made, and how gold is processed and stored. It was amazing to learn how much work goes into something we use every day. Although we weren't allowed to take pictures, the experience was still unforgettable. Everything we saw gave us a deeper understanding of how our economy works and how money is kept safe.\n\nAfter that, we went to HyTech Power Inc., where we got to see the world of technology and innovation. The company showed us how robots and machines are used in engineering and other fields. We saw how these technologies help make work easier, faster, and more efficient.",
      images: [
        "/hytec (1).jpg",
        "/hytec (2).jpg",
        "/hytec (3).jpg",
        "/hytec (4).jpg",
        "/hytec (5).jpg",
        "/hytec (6).jpg",
      ]
    },
    {
      id: 5,
      title: "Day 5: Exploring Transportation and Traffic Systems",
      date: "April 11, 2025",
      category: "Transportation",
      readTime: "7 min read",
      excerpt: "On our fifth day, we explored how the Philippines manages public transportation and traffic systems...",
      coverImage: "/lrt (1).jpg",
      content: "On our fifth day, we explored how the Philippines manages public transportation and traffic systems. It was another exciting and educational experience for all of us.\n\nFirst, we went to the Light Rail Transit Authority (LRT) Line 2. The staff there explained the train system to us—how it works, where the trains go, and how they are operated every day. They also showed us what they do when there's a malfunction or problem on the line. It was really cool to learn how the system is run behind the scenes. The best part was when we got the chance to ride the train ourselves, and it made the experience even more fun and real.\n\nAfter that, we visited the Traffic Engineering Center of MMDA. There, we saw how they monitor traffic using CCTV cameras, especially on EDSA. We were amazed at how they track vehicle flow, watch out for accidents, and manage traffic to help reduce congestion. It gave us a new perspective on how hard it is to keep the roads safe and moving.\n\nIt helped us see the technology and teamwork behind the transportation systems we use every day. It made us appreciate the people working behind the scenes to make things work smoothly for everyone.",
      images: [
        "/lrt (2).jpg",
        "/lrt (3).jpg",
        "/lrt (4).jpg",
        "/lrt (5).jpg",
        "/lrt (6).jpg",
        "/lrt (7).jpg",
        "/mmda (1).jpg",
        "/mmda (2).jpg",
        "/mmda (3).jpg",
        "/mmda (4).jpg"
      ]
    },
    {
      id: 6,
      title: "Day 6: A Peaceful Day in Baguio – Chinese Bell Church, PMA, and Mines View Park",
      date: "April 12, 2025",
      category: "Tourism",
      readTime: "5 min read",
      excerpt: "On our sixth day, we visited Baguio City, known for its cool weather and beautiful views...",
      coverImage: "/pma (3).jpg",
      content: "On our sixth day, we visited Baguio City, known for its cool weather and beautiful views. This day was a mix of culture, history, and relaxation.\n\nWe started the day at the Chinese Bell Church, a quiet and peaceful place filled with colorful designs and traditional Chinese architecture. The area felt calm, and it was a great spot to take photos and enjoy the fresh Baguio air.\n\nNext, we headed to the Philippine Military Academy (PMA). There, we saw planes, jets, and other military equipment on display. We learned a bit about how the academy trains future soldiers and keeps the place secure. It was really interesting to walk around the wide campus and imagine the life of cadets in training.\n\nOur last stop for the day was Mines View Park, one of the most visited spots in Baguio. The view from the top was amazing you could see the mountains and the wide landscape. We also enjoyed shopping for souvenirs at the local stalls.",
      images: [
        "/pma (1).jpg",
        "/pma (2).jpg",
        "/pma (4).jpg",
        "/baguio (6).jpeg",
        "/baguio (7).jpeg",
        "/baguio (8).jpeg",
        "/baguio (9).jpeg",
        "/baguio (10).jpeg"
      ]
    },
    {
      id: 7,
      title: "Day 7: Last Day in Baguio – Burnham Park and Souvenir Shopping",
      date: "April 13, 2025",
      category: "Tourism",
      readTime: "4 min read",
      excerpt: "On our last day, we spent time at Burnham Park. We walked around the park, took pictures, and enjoyed the fresh air...",
      coverImage: "/baguio (1).jpeg",
      content: "On our last day, we spent time at Burnham Park. We walked around the park, took pictures, and enjoyed the fresh air. It was a relaxing way to end our trip.\n\nAfter that, we strolled around nearby stores to buy more souvenirs. Some of us also tried wearing Baguio traditional costumes for photos, which was a fun experience.\n\nWe used this day to rest, enjoy the surroundings, and make the most of our last day in Baguio. It was a simple and nice way to end our journey.",
      images: [
        "/baguio (2).jpeg",
        "/baguio (4).jpeg"
      ]
    }
  ];

  useEffect(() => {
    // Calculate navbar height dynamically to adjust padding
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);

      // Apply the navbar height as padding-top to the blog section
      const blogSection = document.querySelector('.blog-section');
      if (blogSection) {
        blogSection.style.paddingTop = `${navbarHeight + 20}px`; // Add some extra padding
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const openPost = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);

    // Update URL without refreshing the page
    window.history.pushState({}, "", `/blog/${post.id}`);
  };

  const closePost = () => {
    setSelectedPost(null);
    window.history.pushState({}, "", "/blog");
    window.scrollTo(0, 0);
  };

  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  const getRelatedPosts = (currentPost) => {
    return blogPosts
      .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
      .slice(0, 2);
  };

  return (
    <div className="blog-section">
      {isLoading ? (
        <div className="blog-loading">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className={`blog-header ${isScrolled ? 'scrolled' : ''}`}>
            <h1 className="section-title">Educational Tour Blog</h1>
            <p className="blog-subtitle">Follow my journey day by day as I explore and learn</p>
          </div>

          {selectedPost ? (
            <div className="blog-post-full">
              <div className="post-container">
                <button className="back-button" onClick={closePost}>
                  <FaArrowLeft /> Back to All Posts
                </button>

                <div className="post-header">
                  <div className="post-meta-top">
                    <span className="post-category">{selectedPost.category}</span>
                    <span className="post-date">
                      <FaCalendarAlt /> {selectedPost.date}
                    </span>
                    <span className="post-read-time">
                      <FaClock /> {selectedPost.readTime}
                    </span>
                  </div>

                  <h1 className="post-title">{selectedPost.title}</h1>

                  <div className="post-share">
                    <button className="share-button">
                      <FaShare /> Share this post
                    </button>
                  </div>
                </div>

                <div className="post-hero-image">
                  <img src={selectedPost.coverImage} alt={selectedPost.title} />
                  <div className="day-badge">Day {selectedPost.id}</div>
                </div>

                <div className="post-content">
                  {formatContent(selectedPost.content)}

                  <div className="post-gallery">
                    {selectedPost.images.map((image, index) => (
                      <div className="gallery-item" key={index}>
                        <img src={image} alt={`${selectedPost.title} - Image ${index + 1}`} />
                      </div>
                    ))}
                  </div>

                  <div className="post-tags">
                    <span className="tags-title"><FaTag /> Tags:</span>
                    <div className="tags-list">
                      <span className="tag">{selectedPost.category}</span>
                      <span className="tag">Educational Tour</span>
                      <span className="tag">Day {selectedPost.id}</span>
                    </div>
                  </div>
                </div>

                <div className="post-navigation">
                  {blogPosts.findIndex(post => post.id === selectedPost.id) > 0 && (
                    <button
                      className="nav-button prev"
                      onClick={() => openPost(blogPosts[blogPosts.findIndex(post => post.id === selectedPost.id) - 1])}
                    >
                      <FaArrowLeft /> Previous Day
                    </button>
                  )}

                  {blogPosts.findIndex(post => post.id === selectedPost.id) < blogPosts.length - 1 && (
                    <button
                      className="nav-button next"
                      onClick={() => openPost(blogPosts[blogPosts.findIndex(post => post.id === selectedPost.id) + 1])}
                    >
                      Next Day <FaArrowRight />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="featured-post">
                <div className="featured-post-image">
                  <img src={blogPosts[0].coverImage} alt={blogPosts[0].title} />
                  <div className="featured-badge">Featured Post</div>
                </div>
                <div className="featured-post-content">
                  <span className="featured-post-category">{blogPosts[0].category}</span>
                  <h2 className="featured-post-title">{blogPosts[0].title}</h2>
                  <p className="featured-post-excerpt">{blogPosts[0].excerpt}</p>
                  <div className="featured-post-meta">
                    <span className="featured-post-date">
                      <FaCalendarAlt /> {blogPosts[0].date}
                    </span>
                    <span className="featured-post-read-time">
                      <FaClock /> {blogPosts[0].readTime}
                    </span>
                  </div>
                  <button
                    className="featured-post-button"
                    onClick={() => openPost(blogPosts[0])}
                  >
                    Read Full Story <FaArrowRight />
                  </button>
                </div>
              </div>

              <div className="blog-posts-grid">
                {blogPosts.map((post, index) => (
                  // Skip the first post if it's already featured
                  post.id !== 1 && (
                    <div className="blog-card" key={post.id} onClick={() => openPost(post)}>
                      <div className="blog-card-image">
                        <img src={post.coverImage} alt={post.title} />
                        <div className="day-badge">Day {post.id}</div>
                        <div className="category-badge">{post.category}</div>
                      </div>
                      <div className="blog-card-content">
                        <h3 className="blog-card-title">{post.title}</h3>
                        <div className="blog-card-meta">
                          <span className="blog-card-date">
                            <FaCalendarAlt /> {post.date}
                          </span>
                          <span className="blog-card-read-time">
                            <FaClock /> {post.readTime}
                          </span>
                        </div>
                        <p className="blog-card-excerpt">{post.excerpt}</p>
                        <button className="read-more-btn">
                          Read Fulls Story <FaArrowRight className="arrow-icon" />
                        </button>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BlogPage;

