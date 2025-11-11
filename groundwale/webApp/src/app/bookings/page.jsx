'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Search, MapPin, Wifi, Camera, MapPinIcon, Instagram, Eye, X, ChevronDown, Star } from 'lucide-react';

// Dynamically import Header and Footer
const Header = dynamic(() => import('../../../components/Header.jsx'), { ssr: false });
const Footer = dynamic(() => import('../../../components/Footer.jsx'), { ssr: false });

export default function Page() {
  const [selectedType, setSelectedType] = useState('Football');
  const [selectedLocation, setSelectedLocation] = useState('Mumbai');
  const [selectedDate, setSelectedDate] = useState('24-05-2024');
  const [selectedPrice, setSelectedPrice] = useState('₹5000');
  const [selectedImageModal, setSelectedImageModal] = useState(null);
  const [selectedGroundModal, setSelectedGroundModal] = useState(null);

  const [typeOpen, setTypeOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  const sportTypes = ['Football', 'Cricket', 'Tennis', 'Badminton', 'Basketball'];
  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata', 'Ahmedabad'];
  const dates = ['24-05-2024', '25-05-2024', '26-05-2024', '27-05-2024', '28-05-2024'];
  const prices = ['₹2000', '₹3000', '₹5000', '₹7000', '₹10000'];

  const venues = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1200',
      location: 'Mumbai, India',
      address: 'Gachibowli Stadium Road, Mumbai, Maharashtra 400001',
      price: 4000,
      name: 'Mumbai City Academy',
      rating: 4.5,
      reviews: 10,
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team...',
      sports: ['Cricket', 'Football', 'Basketball']
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1200',
      location: 'Delhi, India',
      address: 'Connaught Place, New Delhi, Delhi 110001',
      price: 3500,
      name: 'Delhi Academy',
      rating: 4.5,
      reviews: 10,
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team...',
      sports: ['Cricket', 'Football', 'Tennis']
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?auto=compress&cs=tinysrgb&w=1200',
      location: 'Bangalore, India',
      address: 'Koramangala, Bangalore, Karnataka 560034',
      price: 3800,
      name: 'Bangalore Arena',
      rating: 4.5,
      reviews: 10,
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team...',
      sports: ['Football', 'Basketball', 'Badminton']
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1200',
      location: 'Hyderabad, India',
      address: 'Gachibowli Stadium Road, Hyderabad, Telangana 500032',
      price: 3200,
      name: 'Hyderabad Academy',
      rating: 4.5,
      reviews: 10,
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team...',
      sports: ['Cricket', 'Football', 'Basketball']
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1200',
      location: 'Pune, India',
      address: 'Hinjewadi Phase 1, Pune, Maharashtra 411057',
      price: 3000,
      name: 'Pune Sports Hub',
      rating: 4.5,
      reviews: 10,
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team...',
      sports: ['Football', 'Cricket', 'Tennis']
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1200',
      location: 'Chennai, India',
      address: 'Anna Nagar, Chennai, Tamil Nadu 600040',
      price: 3300,
      name: 'Chennai Stadium',
      rating: 4.5,
      reviews: 10,
      description: 'Play, enjoy and live 90 minutes of ultimate futsal with your team...',
      sports: ['Cricket', 'Football', 'Badminton']
    }
  ];

  return (
    <>
      <Header />
      <div style={styles.container}>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes backdropFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .card {
          animation: fadeIn 0.5s ease-out;
        }

        .dropdown {
          animation: slideDown 0.2s ease-out;
        }

        .modal-content {
          animation: modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-backdrop {
          animation: backdropFade 0.2s ease-out;
        }
      `}</style>

      {/* Image Preview Modal */}
      {selectedImageModal && (
        <div
          style={styles.modalBackdrop}
          className="modal-backdrop"
          onClick={() => setSelectedImageModal(null)}
        >
          <div
            style={styles.imageModalContent}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImageModal.image}
              alt={selectedImageModal.name}
              style={styles.modalImage}
            />
            <button
              style={styles.closeButton}
              onClick={() => setSelectedImageModal(null)}
            >
              <X size={28} color="#fff" />
            </button>
          </div>
        </div>
      )}

      {/* Ground Details Modal */}
      {selectedGroundModal && (
        <div
          style={styles.modalBackdrop}
          className="modal-backdrop"
          onClick={() => setSelectedGroundModal(null)}
        >
          <div
            style={styles.detailsModalContent}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={styles.closeButton}
              onClick={() => setSelectedGroundModal(null)}
            >
              <X size={28} color="#fff" />
            </button>

            <div style={styles.modalLayout}>
              {/* Left Side - Image */}
              <div style={styles.modalImageSection}>
                <img
                  src={selectedGroundModal.image}
                  alt={selectedGroundModal.name}
                  style={styles.modalGroundImage}
                />
              </div>

              {/* Right Side - Details */}
              <div style={styles.modalDetailsSection}>
                <h2 style={styles.modalGroundName}>{selectedGroundModal.name}</h2>

                {/* Full Address */}
                <div style={styles.modalSection}>
                  <div style={styles.modalSectionHeader}>
                    <MapPin size={18} color="#4a9d5f" />
                    <span style={styles.modalSectionTitle}>FULL ADDRESS</span>
                  </div>
                  <p style={styles.modalAddress}>{selectedGroundModal.address}</p>
                </div>

                {/* Rating */}
                <div style={styles.modalSection}>
                  <div style={styles.modalSectionHeader}>
                    <Star size={18} color="#4a9d5f" fill="#4a9d5f" />
                    <span style={styles.modalSectionTitle}>RATING</span>
                  </div>
                  <div style={styles.modalRatingContainer}>
                    <span style={styles.modalRatingNumber}>{selectedGroundModal.rating}</span>
                    <span style={styles.modalRatingReviews}>({selectedGroundModal.reviews} reviews)</span>
                  </div>
                </div>

                {/* Sports Available */}
                <div style={styles.modalSection}>
                  <div style={styles.modalSectionHeader}>
                    <span style={styles.modalSectionIcon}>⚽</span>
                    <span style={styles.modalSectionTitle}>SPORTS AVAILABLE</span>
                  </div>
                  <div style={styles.sportsContainer}>
                    {selectedGroundModal.sports.map((sport) => (
                      <span key={sport} style={styles.sportTag}>
                        {sport}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div style={styles.modalPriceSection}>
                  <div style={styles.modalPriceLabel}>PRICE PER HOUR</div>
                  <div style={styles.modalPriceAmount}>
                    ₹{selectedGroundModal.price}
                    <span style={styles.modalPriceUnit}>/h</span>
                  </div>
                </div>

                {/* View Ground Button */}
                <button style={styles.viewGroundButton}>
                  VIEW GROUND
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            BEST TURF BOOKING<br />PLATFORM IN YOUR AREA
          </h1>
          <p style={styles.heroSubtitle}>
            You can choose from a variety of sports, such as cricket, football, badminton, tennis<br />
            and more, and book your preferred time slot and location.
          </p>

          {/* Enhanced Search Bar */}
          <div style={styles.searchContainer}>
            <div style={styles.searchBar}>
              {/* Type Dropdown */}
              <div style={styles.dropdownWrapper}>
                <label style={styles.searchLabel}>Sport Type</label>
                <button
                  style={{...styles.dropdownButton, ...(typeOpen && styles.dropdownButtonActive)}}
                  onClick={() => {
                    setTypeOpen(!typeOpen);
                    setLocationOpen(false);
                    setDateOpen(false);
                    setPriceOpen(false);
                  }}
                >
                  <span>{selectedType}</span>
                  <ChevronDown size={18} color="#4a9d5f" style={{transform: typeOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease'}} />
                </button>
                {typeOpen && (
                  <div style={styles.dropdownMenu} className="dropdown">
                    {sportTypes.map((type) => (
                      <button
                        key={type}
                        style={{...styles.dropdownItem, ...(selectedType === type && styles.dropdownItemActive)}}
                        onClick={() => {
                          setSelectedType(type);
                          setTypeOpen(false);
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div style={styles.searchDivider}></div>

              {/* Location Dropdown */}
              <div style={styles.dropdownWrapper}>
                <label style={styles.searchLabel}>Location</label>
                <button
                  style={{...styles.dropdownButton, ...(locationOpen && styles.dropdownButtonActive)}}
                  onClick={() => {
                    setLocationOpen(!locationOpen);
                    setTypeOpen(false);
                    setDateOpen(false);
                    setPriceOpen(false);
                  }}
                >
                  <span>{selectedLocation}</span>
                  <ChevronDown size={18} color="#4a9d5f" style={{transform: locationOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease'}} />
                </button>
                {locationOpen && (
                  <div style={styles.dropdownMenu} className="dropdown">
                    {locations.map((loc) => (
                      <button
                        key={loc}
                        style={{...styles.dropdownItem, ...(selectedLocation === loc && styles.dropdownItemActive)}}
                        onClick={() => {
                          setSelectedLocation(loc);
                          setLocationOpen(false);
                        }}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div style={styles.searchDivider}></div>

              {/* Date Dropdown */}
              <div style={styles.dropdownWrapper}>
                <label style={styles.searchLabel}>Date</label>
                <button
                  style={{...styles.dropdownButton, ...(dateOpen && styles.dropdownButtonActive)}}
                  onClick={() => {
                    setDateOpen(!dateOpen);
                    setTypeOpen(false);
                    setLocationOpen(false);
                    setPriceOpen(false);
                  }}
                >
                  <span>{selectedDate}</span>
                  <ChevronDown size={18} color="#4a9d5f" style={{transform: dateOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease'}} />
                </button>
                {dateOpen && (
                  <div style={styles.dropdownMenu} className="dropdown">
                    {dates.map((date) => (
                      <button
                        key={date}
                        style={{...styles.dropdownItem, ...(selectedDate === date && styles.dropdownItemActive)}}
                        onClick={() => {
                          setSelectedDate(date);
                          setDateOpen(false);
                        }}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div style={styles.searchDivider}></div>

              {/* Price Dropdown */}
              <div style={styles.dropdownWrapper}>
                <label style={styles.searchLabel}>Budget</label>
                <button
                  style={{...styles.dropdownButton, ...(priceOpen && styles.dropdownButtonActive)}}
                  onClick={() => {
                    setPriceOpen(!priceOpen);
                    setTypeOpen(false);
                    setLocationOpen(false);
                    setDateOpen(false);
                  }}
                >
                  <span>{selectedPrice}</span>
                  <ChevronDown size={18} color="#4a9d5f" style={{transform: priceOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease'}} />
                </button>
                {priceOpen && (
                  <div style={styles.dropdownMenu} className="dropdown">
                    {prices.map((price) => (
                      <button
                        key={price}
                        style={{...styles.dropdownItem, ...(selectedPrice === price && styles.dropdownItemActive)}}
                        onClick={() => {
                          setSelectedPrice(price);
                          setPriceOpen(false);
                        }}
                      >
                        {price}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button style={styles.searchButton}>
                <Search size={24} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Venues Section */}
      <div style={styles.venuesSection}>
        <div style={styles.venuesHeader}>
          <h2 style={styles.venuesTitle}>Explore best turf nearby you</h2>
          <button style={styles.seeAllButton}>
            See all
            <span style={styles.arrowIcon}>→</span>
          </button>
        </div>

        <div style={styles.venuesGrid}>
          {venues.map((venue, index) => (
            <div
              key={venue.id}
              className="card"
              style={{...styles.card, animationDelay: `${index * 0.1}s`}}
              onClick={() => setSelectedGroundModal(venue)}
            >
              <div style={styles.cardImageContainer}>
                <img
                  src={venue.image}
                  alt={venue.name}
                  style={styles.cardImage}
                />
                <div style={styles.cardLocation}>
                  <MapPin size={14} />
                  <span style={styles.cardLocationText}>{venue.location}</span>
                </div>
                <button
                  style={styles.cardFavorite}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageModal(venue);
                  }}
                >
                  <Eye size={20} color="#4a9d5f" />
                </button>
              </div>

              <div style={styles.cardContent}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardPrice}>
                    <span style={styles.priceAmount}>₹{venue.price}</span>
                    <span style={styles.priceUnit}>/h</span>
                  </div>
                </div>

                <h3 style={styles.cardTitle}>{venue.name}</h3>

                <div style={styles.cardRating}>
                  <span style={styles.starIcon}>★</span>
                  <span style={styles.ratingText}>{venue.rating}({venue.reviews})</span>
                </div>

                <p style={styles.cardDescription}>{venue.description}</p>

                <div style={styles.cardIcons}>
                  <div style={styles.iconButton}>
                    <Wifi size={18} color="#666" />
                  </div>
                  <div style={styles.iconButton}>
                    <Camera size={18} color="#666" />
                  </div>
                  <div style={styles.iconButton}>
                    <MapPinIcon size={18} color="#666" />
                  </div>
                  <div style={styles.iconButton}>
                    <Instagram size={18} color="#666" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  hero: {
    position: 'relative',
    width: '100%',
    height: '600px',
    backgroundImage: 'url(https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1920)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0 0 32px 32px',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    padding: '0 20px',
    maxWidth: '1100px',
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '20px',
    lineHeight: '1.1',
    letterSpacing: '1.5px',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#e8e8e8',
    marginBottom: '48px',
    lineHeight: '1.6',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '24px 32px',
    gap: '0',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    maxWidth: '1000px',
    width: '100%',
  },
  dropdownWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1,
    minWidth: '0',
    position: 'relative',
  },
  searchLabel: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
  },
  dropdownButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a1a1a',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: '8px 4px',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: 0,
  },
  dropdownButtonActive: {
    color: '#4a9d5f',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: '0',
    right: '0',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    marginTop: '8px',
    zIndex: 10001,
    overflow: 'hidden',
    border: '1px solid #f0f0f0',
    minWidth: '150px',
    maxHeight: '250px',
    overflowY: 'auto',
  },
  dropdownItem: {
    display: 'block',
    width: '100%',
    padding: '12px 16px',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '15px',
    fontWeight: '500',
    color: '#666',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all 0.2s ease',
  },
  dropdownItemActive: {
    backgroundColor: '#f0f8f5',
    color: '#4a9d5f',
    fontWeight: '600',
  },
  searchDivider: {
    width: '1.5px',
    height: '50px',
    backgroundColor: '#e8e8e8',
    margin: '0 24px',
  },
  searchButton: {
    backgroundColor: '#4a9d5f',
    border: 'none',
    borderRadius: '14px',
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: '16px',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: '0 6px 20px rgba(74, 157, 95, 0.35)',
  },
  venuesSection: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '80px 40px 100px',
  },
  venuesHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '50px',
  },
  venuesTitle: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#1a1a1a',
    letterSpacing: '-0.5px',
  },
  seeAllButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '16px',
    color: '#999',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  arrowIcon: {
    fontSize: '18px',
    transition: 'transform 0.3s ease',
  },
  venuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '36px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
  },
  cardImageContainer: {
    position: 'relative',
    width: '100%',
    height: '240px',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  cardLocation: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '8px 14px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  cardLocationText: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  cardFavorite: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '44px',
    height: '44px',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
  },
  cardContent: {
    padding: '24px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  cardPrice: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '3px',
  },
  priceAmount: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#1a1a1a',
  },
  priceUnit: {
    fontSize: '15px',
    color: '#999',
    fontWeight: '500',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '10px',
    lineHeight: '1.3',
  },
  cardRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '14px',
  },
  starIcon: {
    color: '#4a9d5f',
    fontSize: '18px',
  },
  ratingText: {
    fontSize: '15px',
    color: '#666',
    fontWeight: '600',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#999',
    lineHeight: '1.5',
    marginBottom: '18px',
  },
  cardIcons: {
    display: 'flex',
    gap: '12px',
    paddingTop: '14px',
    borderTop: '1.5px solid #f0f0f0',
  },
  iconButton: {
    width: '40px',
    height: '40px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  modalBackdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
    backdropFilter: 'blur(4px)',
  },
  imageModalContent: {
    position: 'relative',
    backgroundColor: '#000000',
    borderRadius: '16px',
    overflow: 'hidden',
    width: '80vw',
    maxWidth: '1200px',
    aspectRatio: '16 / 9',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
  },
  detailsModalContent: {
    position: 'relative',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    overflow: 'hidden',
    width: '85vw',
    maxWidth: '1100px',
    maxHeight: '85vh',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '48px',
    height: '48px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10002,
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  modalImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  modalLayout: {
    display: 'flex',
    height: '100%',
  },
  modalImageSection: {
    flex: '0 0 50%',
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  modalGroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  modalDetailsSection: {
    flex: '0 0 50%',
    padding: '48px 40px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  modalGroundName: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: '32px',
    lineHeight: '1.2',
  },
  modalSection: {
    marginBottom: '28px',
  },
  modalSectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
  },
  modalSectionIcon: {
    fontSize: '18px',
  },
  modalSectionTitle: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#4a9d5f',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  modalAddress: {
    fontSize: '16px',
    color: '#1a1a1a',
    lineHeight: '1.6',
    fontWeight: '500',
    paddingLeft: '28px',
  },
  modalRatingContainer: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    paddingLeft: '28px',
  },
  modalRatingNumber: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#1a1a1a',
  },
  modalRatingReviews: {
    fontSize: '15px',
    color: '#666',
    fontWeight: '500',
  },
  sportsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    paddingLeft: '28px',
  },
  sportTag: {
    backgroundColor: '#e8f5e9',
    color: '#4a9d5f',
    padding: '8px 18px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    border: '1.5px solid #d4edda',
  },
  modalPriceSection: {
    marginTop: 'auto',
    marginBottom: '24px',
    paddingTop: '24px',
    borderTop: '2px solid #f0f0f0',
  },
  modalPriceLabel: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#999',
    letterSpacing: '1px',
    marginBottom: '8px',
  },
  modalPriceAmount: {
    fontSize: '40px',
    fontWeight: '800',
    color: '#1a1a1a',
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
  },
  modalPriceUnit: {
    fontSize: '20px',
    color: '#999',
    fontWeight: '600',
  },
  viewGroundButton: {
    width: '100%',
    backgroundColor: '#4a9d5f',
    color: '#ffffff',
    border: 'none',
    borderRadius: '16px',
    padding: '18px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '0.5px',
    boxShadow: '0 6px 20px rgba(74, 157, 95, 0.3)',
  },
};
