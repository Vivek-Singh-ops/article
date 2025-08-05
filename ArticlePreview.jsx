import React, { useEffect, useRef } from 'react';
import './ArticlePreview.css';
import LinkCard from './Linkscard/LinkCard'; // This is your 5-card section
import './Linkscard/linkcard.css';





const articles = [
  {
    title: 'The Rise of AI',
    content: 'Artificial Intelligence is transforming industries across the globe. From healthcare to finance, AI is enabling smarter decisions and automation...'
  },
  {
    title: 'Climate Change Challenges',
    content: 'Climate change is one of the most pressing issues of our time. Rising temperatures, melting glaciers, and extreme weather events are just a few signs...'
  },
  {
    title: 'Exploring the Cosmos',
    content: 'Space exploration has always fascinated humankind. With new missions to Mars and beyond, we are entering a new era of discovery and innovation...'
  }
];

const ArticlePreview = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    refs.current.forEach(ref => observer.observe(ref));
  }, []);

  const toggleExpand = index => {
    const content = document.getElementById(`content-${index}`);
    const btn = document.getElementById(`btn-${index}`);
    content.classList.toggle('expanded');
    btn.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
  };

  return (
    <div className="article-page">
      <h1>Latest Articles</h1>
      
      {articles.map((article, idx) => (
        <div
          className="article"
          data-direction={idx % 2 === 0 ? 'left' : 'right'}
          key={idx}
          ref={el => refs.current[idx] = el}
        >
          <h2>{article.title}</h2>
          <div className="underline" />
          
          <div className="content" id={`content-${idx}`}>
            {article.content}
          </div>
          <span className="toggle-btn" id={`btn-${idx}`} onClick={() => toggleExpand(idx)}>Read More</span>
        </div>
        
      ))}
      <div style={{ marginTop: '50px' }}>
      <LinkCard />
      
    </div>
      
    </div>
  );
};

export default ArticlePreview;
