import { useState, useEffect, useCallback } from 'react';
import './gallery.css';

// ── Import all 22 photos from Gallary folder ──────────────────────────────────
import img1  from '../assets/Gallary/IMG_20250429_110512364_AE - Copy (2).jpg';
import img2  from '../assets/Gallary/JUNIOR.jpg';
import img3  from '../assets/Gallary/NVS_3312.JPG';
import img4  from '../assets/Gallary/NVS_3346.JPG';
import img5  from '../assets/Gallary/NVS_3349.JPG';
import img6  from '../assets/Gallary/NVS_3419.JPG';
import img7  from '../assets/Gallary/NVS_3425.JPG';
import img8  from '../assets/Gallary/NVS_3440.JPG';
import img9  from '../assets/Gallary/NVS_3447.JPG';
import img10 from '../assets/Gallary/NVS_3459.JPG';
import img11 from '../assets/Gallary/NVS_3489.JPG';
import img12 from '../assets/Gallary/NVS_3495.JPG';
import img13 from '../assets/Gallary/NVS_3499.JPG';
import img14 from '../assets/Gallary/NVS_3580.JPG';
import img15 from '../assets/Gallary/NVS_3591.JPG';
import img16 from '../assets/Gallary/PRIMARY.jpg';
import img17 from '../assets/Gallary/Untitled-2.jpg';
import img18 from '../assets/Gallary/WhatsApp Image 2025-05-31 at 5.48.10 PM.jpeg';
import img19 from '../assets/Gallary/WhatsApp Image 2025-06-19 at 5.59.03 PM.jpeg';
import img20 from '../assets/Gallary/WhatsApp Image 2026-08-22 at 9.57.44 AM (1).jpeg';
import img21 from '../assets/Gallary/WhatsApp Image 2026-08-22 at 9.57.46 AM.jpeg';
import img22 from '../assets/Gallary/WhatsApp Image 2026-09-10 at 10.22.56 PM.jpeg';

const galleryImages = [
  { id: 1,  src: img1,  alt: 'Campus Life',          tag: 'Campus'    },
  { id: 2,  src: img2,  alt: 'Junior Batch',          tag: 'Students'  },
  { id: 3,  src: img3,  alt: 'Classroom Session',     tag: 'Classes'   },
  { id: 4,  src: img4,  alt: 'Study Hall',            tag: 'Classes'   },
  { id: 5,  src: img5,  alt: 'Group Discussion',      tag: 'Students'  },
  { id: 6,  src: img6,  alt: 'Lecture Hall',          tag: 'Classes'   },
  { id: 7,  src: img7,  alt: 'Batch Interaction',     tag: 'Students'  },
  { id: 8,  src: img8,  alt: 'Faculty Mentoring',     tag: 'Faculty'   },
  { id: 9,  src: img9,  alt: 'Seminar Session',       tag: 'Events'    },
  { id: 10, src: img10, alt: 'Exam Preparation',      tag: 'Students'  },
  { id: 11, src: img11, alt: 'Morning Assembly',      tag: 'Campus'    },
  { id: 12, src: img12, alt: 'Library Study',         tag: 'Campus'    },
  { id: 13, src: img13, alt: 'Student Achievement',   tag: 'Events'    },
  { id: 14, src: img14, alt: 'Annual Ceremony',       tag: 'Events'    },
  { id: 15, src: img15, alt: 'Award Function',        tag: 'Events'    },
  { id: 16, src: img16, alt: 'Primary Batch',         tag: 'Students'  },
  { id: 17, src: img17, alt: 'Institute View',        tag: 'Campus'    },
  { id: 18, src: img18, alt: 'Cultural Event',        tag: 'Events'    },
  { id: 19, src: img19, alt: 'Success Celebration',   tag: 'Events'    },
  { id: 20, src: img20, alt: 'Special Workshop',      tag: 'Faculty'   },
  { id: 21, src: img21, alt: 'Faculty Meet',          tag: 'Faculty'   },
  { id: 22, src: img22, alt: 'Recent Gathering',      tag: 'Events'    },
];

const TAGS = ['All', 'Classes', 'Students', 'Faculty', 'Events', 'Campus'];

// Show 2 rows × 4 columns = 8 images initially
const INITIAL_VISIBLE = 8;

function Gallery() {
  const [activeTag, setActiveTag] = useState('All');
  const [showAll, setShowAll]     = useState(false);
  const [lightbox, setLightbox]   = useState(null);

  const filtered = activeTag === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.tag === activeTag);

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hasMore   = filtered.length > INITIAL_VISIBLE;

  // reset showAll whenever filter changes
  const handleTagChange = (tag) => {
    setActiveTag(tag);
    setShowAll(false);
  };

  // Keyboard navigation for lightbox
  const handleKey = useCallback((e) => {
    if (lightbox === null) return;
    if (e.key === 'Escape')      setLightbox(null);
    if (e.key === 'ArrowRight')  setLightbox(i => (i + 1) % filtered.length);
    if (e.key === 'ArrowLeft')   setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  }, [lightbox, filtered.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const prevImage = (e) => { e.stopPropagation(); setLightbox(i => (i - 1 + filtered.length) % filtered.length); };
  const nextImage = (e) => { e.stopPropagation(); setLightbox(i => (i + 1) % filtered.length); };

  return (
    <section className="gallery-section" id="gallery">

      {/* ── Header — matches site typography ── */}
      <div className="gallery-header">
        <h1 className="gallery-title">PICTURE GALLERY</h1>
        <p className="gallery-subtitle">
          Explore the journey of IAS &amp; PCS aspirants at Civil India — from engaging
          classes and seminars to success celebrations and memorable events.
        </p>
      </div>

      {/* ── Filter Tabs ── */}
      <div className="gallery-filters">
        {TAGS.map(tag => (
          <button
            key={tag}
            className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
            onClick={() => handleTagChange(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="gallery-grid">
        {displayed.map((img, idx) => (
          <div
            key={img.id}
            className="gallery-item"
            style={{ animationDelay: `${(idx % 8) * 50}ms` }}
            onClick={() => setLightbox(idx)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-overlay-content">
                <span className="overlay-tag">{img.tag}</span>
                <p className="overlay-alt">{img.alt}</p>
                <span className="overlay-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Show More / Show Less ── */}
      {hasMore && (
        <div className="gallery-show-more">
          <button
            className="show-more-btn"
            onClick={() => setShowAll(prev => !prev)}
          >
            {showAll ? (
              <>
                Show Less
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="18 15 12 9 6 15"/>
                </svg>
              </>
            ) : (
              <>
                Show More ({filtered.length - INITIAL_VISIBLE} more photos)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="lightbox-backdrop" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <button className="lightbox-arrow lightbox-prev" onClick={prevImage} aria-label="Previous">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].alt} className="lightbox-img" />
            <div className="lightbox-caption">
              <span className="lightbox-tag">{filtered[lightbox].tag}</span>
              <span className="lightbox-alt">{filtered[lightbox].alt}</span>
              <span className="lightbox-counter">{lightbox + 1} / {filtered.length}</span>
            </div>
          </div>

          <button className="lightbox-arrow lightbox-next" onClick={nextImage} aria-label="Next">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
