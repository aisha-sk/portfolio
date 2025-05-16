import React, { useEffect, useRef } from 'react';
import styles from './WorkExperience.module.scss';

export const WorkExperience = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTimeRef.current < 16) return; // ~60fps
      lastTimeRef.current = now;

      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      cardsRef.current.forEach((card) => {
        if (!card) return;
        
        const offsetX = (x - 0.5) * 5; // Reduced from 10 to 5
        const offsetY = (y - 0.5) * 5; // Reduced from 10 to 5
        const rotationX = (y - 0.5) * 1; // Reduced from 2 to 1
        const rotationY = (x - 0.5) * 1; // Reduced from 2 to 1
        
        card.style.transform = `
          translate3d(${offsetX}px, ${offsetY}px, 0)
          rotateX(${rotationX}deg)
          rotateY(${rotationY}deg)
        `;
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const experiences = [
    {
      company: "City of Edmonton",
      role: "Application & Infrastructure Analyst Intern",
      period: "jan 2025 - present · 4 mos",
      location: "edmonton, ab · on-site",
      link: "https://www.edmonton.ca/",
      image: "/placeholder-coe.jpg",
      bullets: [
        "building web apps for edmontonians and the internal teams at coe!",
        "learning outsystems to create efficient internal tools"
      ]
    },
    {
      company: "Blueprint, Technology for Non-Profits",
      role: "VP Product",
      period: "apr 2025 - present · 1 mo",
      location: "edmonton, ab · hybrid",
      link: "https://uofablueprint.com/",
      image: "/placeholder-blueprint.jpg",
      note: "incoming in may 2025 :)",
      previousRole: {
        title: "Previously Software Developer",
        period: "oct 2023 - apr 2025 · 1 yr 7 mos",
        bullets: [
          "worked on the club website using the HUGO framework",
          "built the non-profits page with decision criteria/faq's & the about page",
          "started out in floater team, worked on our scaffolding tool"
        ]
      }
    },
    {
      company: "Intel Corporation",
      role: "Intel Student Ambassador",
      period: "may 2024 - present · 1 yr",
      location: "canada · hybrid",
      link: "https://www.intel.com/",
      image: "/placeholder-intel.jpg",
      bullets: [
        "learnt how to use AI Analytics Toolkit, built AI models on Intel Developer Cloud",
        "used modin, scikit-learn, and XGBoost for data preprocessing and ML workflows"
      ]
    },
    {
      company: "+twe",
      role: "AI Development Intern",
      period: "jul 2024 - sep 2024 · 3 mos",
      link: "https://twe.co/",
      image: "/placeholder-twe.jpg",
      bullets: [
        "led ai product innovation end-to-end: researched and strategized with llama 3 & openai apis (assistant api & gpt‑4)",
        "prototyped with cross‑functional teams, and shipped seamless ai experiences"
      ],
      previousRole: {
        title: "Product Management Intern",
        period: "jun 2024 - jul 2024 · 2 mos",
        bullets: [
          "managed phase II of +twe's product, contributing across ai, web, and mobile development",
          "supported research, strategy, and qa before transitioning fully into ai dev"
        ]
      }
    }
  ];

  return (
    <section id="experience" className={styles.workExperience}>
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.experiences} ref={containerRef}>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={styles.experienceCard}
            ref={el => cardsRef.current[index] = el}
            style={{
              '--delay': `${index * 0.1}s`,
              '--z-index': experiences.length - index
            }}
          >
            {exp.image && (
              <div className={styles.imageContainer}>
                <img 
                  src={exp.image} 
                  alt={`${exp.company} visual`}
                  loading="lazy"
                />
              </div>
            )}
            <div className={styles.companyHeader}>
              <h4 className={styles.role}>{exp.role}</h4>
              <span className={styles.period}>{exp.period}</span>
            </div>
            <a 
              href={exp.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.company}
            >
              {exp.company}
            </a>
            {exp.location && <p className={styles.location}>{exp.location}</p>}
            {exp.note && <p className={styles.note}>{exp.note}</p>}
            {exp.bullets && (
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
            {exp.previousRole && (
              <div className={styles.previousRole}>
                <h4 className={styles.role}>{exp.previousRole.title}</h4>
                <span className={styles.period}>{exp.previousRole.period}</span>
                <ul className={styles.bullets}>
                  {exp.previousRole.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}; 