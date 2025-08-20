import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const HeroSection = styled.section`
  height: calc(100vh - 80px); // Full viewport height minus header
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  text-align: center;
  position: relative;
  transition: background-image 0.5s ease-in-out;
`;

export const HeroContent = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: ${theme.spacings.large};
  border-radius: 8px;
  animation: ${fadeIn} 1s ease-out;
  max-width: 80%;
  h1 {
    font-size: 3rem;
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.heading};
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }
  p {
    font-size: ${theme.fontSizes.large};
    margin-bottom: ${theme.spacings.medium};
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSizes.medium};
    }
  }
`;

export const CarouselNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: ${theme.spacings.small};
  cursor: pointer;
  font-size: 2rem;
  z-index: 5;
  transition: background-color 0.3s ease;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
  &.prev {
    left: ${theme.spacings.medium};
  }
  &.next {
    right: ${theme.spacings.medium};
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    padding: ${theme.spacings.xsmall};
  }
`;

export const Section = styled.section`
  padding: ${theme.spacings.xlarge} ${theme.spacings.medium};
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
  &:nth-child(even) { // Alternating background for visual separation
    background-color: ${theme.colors.lightBlueGray}20; 
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacings.large};
  font-family: ${theme.fonts.heading};
`;

export const ProgramacaoGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacings.large};
  flex-wrap: wrap;
  margin-top: ${theme.spacings.medium};
`;

export const ProgramacaoCard = styled(Link)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacings.large};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-decoration: none;
  color: ${theme.colors.text};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  svg {
    font-size: 2.5rem;
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacings.small};
  }
  h3 {
    font-size: ${theme.fontSizes.xlarge};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xsmall};
  }
  p {
    font-size: ${theme.fontSizes.medium};
  }
`;

export const YoutubeSection = styled.div`
  margin-top: ${theme.spacings.medium};
`;

export const VideoPlayerPlaceholder = styled.div`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  background-color: ${theme.colors.black};
  margin: 0 auto ${theme.spacings.medium} auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
  iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  p {
    font-size: ${theme.fontSizes.large};
  }
`;

export const RecentVideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacings.medium};
  margin-top: ${theme.spacings.large};
`;

export const VideoThumbnailCard = styled.a`
  background-color: ${theme.colors.white};
  border-radius: 6px;
  overflow: hidden;
  text-decoration: none;
  color: ${theme.colors.text};
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.12);
  }
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  h4 {
    font-size: ${theme.fontSizes.medium};
    padding: ${theme.spacings.small};
    font-family: ${theme.fonts.main};
    font-weight: 600;
    color: ${theme.colors.primary};
  }
`;

export const ContribuaHomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacings.medium};
  margin-top: ${theme.spacings.medium};
  p {
    font-size: ${theme.fontSizes.medium};
    line-height: 1.6;
    max-width: 600px;
  }
  img {
    max-width: 200px;
    border: 3px solid ${theme.colors.lightGray};
    border-radius: 6px;
  }
`;

export const ContribuaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacings.small} ${theme.spacings.medium};
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: ${theme.fontSizes.medium};
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: ${theme.spacings.small};
  svg {
    margin-right: ${theme.spacings.xsmall};
  }
  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.primary};
  padding: ${theme.spacings.xlarge} 0;
`;

export const ErrorText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: red;
  padding: ${theme.spacings.xlarge} 0;
`;