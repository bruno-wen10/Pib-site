import { theme } from "@/styles/theme";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";


export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 1000px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  margin-bottom: ${theme.spacings.medium};
  font-size: ${theme.fontSizes.medium};
  transition: color 0.3s ease;

  svg {
    margin-right: ${theme.spacings.xsmall};
  }

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

export const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacings.large};
  padding-bottom: ${theme.spacings.medium};
  border-bottom: 1px solid ${theme.colors.lightGray};
`;

export const MinisterioImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${theme.spacings.medium};
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  font-size: 2.8rem; // Slightly larger for individual page
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.small};
`;

export const ShortDescription = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.text};
  max-width: 800px;
  margin: 0 auto ${theme.spacings.medium} auto;
  line-height: 1.7;
  font-style: italic;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacings.large};
  margin-top: ${theme.spacings.medium};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr; // Main content and sidebar
  }
`;

export const MainContent = styled.article`
  h2 {
    font-size: ${theme.fontSizes.xlarge};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.heading};
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.small};
    border-bottom: 2px solid ${theme.colors.secondary};
    padding-bottom: ${theme.spacings.xsmall};
    display: inline-block;
  }
  p {
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.text};
    line-height: 1.8;
    margin-bottom: ${theme.spacings.medium};
    white-space: pre-wrap; // Preserve line breaks from description
  }
`;

export const Sidebar = styled.aside`
  background-color: ${theme.colors.white};
  padding: ${theme.spacings.medium};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  align-self: flex-start; // Stick to top

  h3 {
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.heading};
    margin-bottom: ${theme.spacings.medium};
  }
`;

export const InfoItem = styled.div`
  display: flex;
 
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  
  svg {
    color: ${theme.colors.secondary};
    margin-right: ${theme.spacings.small};
    font-size: 1.2em;
    min-width: 20px; // Ensure icon alignment
  }
`;

export const MediaSection = styled.section`
  margin-top: ${theme.spacings.large};
  h2 {
    text-align: center;
  }
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacings.medium};
  margin-bottom: ${theme.spacings.large};

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
  }
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacings.medium};

  iframe {
    width: 100%;
    height: 200px;
    border-radius: 6px;
    border: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.primary};
  padding: ${theme.spacings.xlarge};
`;

export const ErrorText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: red;
  padding: ${theme.spacings.xlarge};
`;